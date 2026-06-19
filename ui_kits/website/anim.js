// GSL Audit — лёгкие анимации: появление при скролле (.reveal) и счётчики ([data-count]).
// Без зависимостей. Уважает prefers-reduced-motion. Переживает ре-рендеры React.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  function countUp(el) {
    var raw = el.getAttribute("data-count") || "";
    var m = raw.match(/^(\d[\d\s]*)(.*)$/);
    if (!m) { el.textContent = raw; return; }
    var num = parseInt(m[1].replace(/\s/g, ""), 10);
    var suffix = m[2] || "";
    if (reduce || !num) { el.textContent = num.toLocaleString("ru-RU") + suffix; return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(num * eased).toLocaleString("ru-RU") + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function activate(el) {
    el.classList.add("is-in");
    if (el.hasAttribute("data-count") && !el.__counted) { el.__counted = true; countUp(el); }
  }

  if (!hasIO) {
    // Фолбэк: показываем всё сразу.
    var showAll = function () {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
      document.querySelectorAll("[data-count]").forEach(function (el) { if (!el.__counted) { el.__counted = true; el.textContent = el.getAttribute("data-count"); } });
    };
    showAll();
    new MutationObserver(showAll).observe(document.getElementById("root") || document.body, { childList: true, subtree: true });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { activate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -7% 0px" });

  function scan() {
    document.querySelectorAll(".reveal, [data-count]").forEach(function (el) {
      if (el.__obs || el.classList.contains("is-in")) return;
      el.__obs = true;
      io.observe(el);
    });
  }

  var root = document.getElementById("root") || document.body;
  new MutationObserver(function () { scan(); }).observe(root, { childList: true, subtree: true });
  scan();

  // Догоняем поздний маунт React.
  var n = 0, iv = setInterval(function () { scan(); if (++n > 24) clearInterval(iv); }, 150);

  // Страховка: что не показалось за 4с — показать принудительно (защита от сбоя наблюдателя).
  setTimeout(function () {
    document.querySelectorAll(".reveal:not(.is-in)").forEach(activate);
  }, 4000);
})();
