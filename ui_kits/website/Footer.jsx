// GSL Audit website — Footer
(function () {
  const React = window.React;
  const I = window.GSLIcons;

  function Col({ title, links, navigate }) {
    return (
      <div>
        <h4>{title}</h4>
        {links.map((l) => <a key={l} onClick={() => navigate && navigate("service")}>{l}</a>)}
      </div>
    );
  }

  function Footer({ navigate }) {
    return (
      <footer className="ftr">
        <div className="container">
          <div className="ftr__grid">
            <div>
              <img className="ftr__logo" src="../../assets/logos/gsl-logo-reverse.svg" alt="GSL Audit" />
              <p style={{ color: "var(--neutral-400)", fontSize: "var(--fs-small)", lineHeight: "var(--lh-relaxed)", maxWidth: "34ch" }}>
                Аудит, бухгалтерия, налоги и юридическое сопровождение бизнеса и частных лиц — в России и за рубежом.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "var(--space-6)" }}>
                <span style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--neutral-300)", fontSize: "var(--fs-small)" }}><I.Phone width={16} height={16} /> +7 495 234-38-44</span>
                <span style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--neutral-300)", fontSize: "var(--fs-small)" }}><I.Mail width={16} height={16} /> info@gsl.ru</span>
                <span style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--neutral-300)", fontSize: "var(--fs-small)" }}><I.MapPin width={16} height={16} /> Москва, ул. Маросейка, 6/8с1</span>
              </div>
            </div>
            <Col title="Услуги" navigate={navigate} links={["Аудит", "Бухгалтерия", "Налоговый консалтинг", "Юридические услуги"]} />
            <Col title="Международное" navigate={navigate} links={["КИК", "Зарубежные счета", "Регистрация компаний", "МСФО"]} />
            <Col title="Компания" navigate={navigate} links={["О нас", "Команда", "Блог", "Контакты"]} />
          </div>
          <div className="ftr__bottom">
            <span>© 2026 GSL Audit. Все права защищены.</span>
            <span style={{ display: "flex", gap: "var(--space-6)" }}>
              <a style={{ display: "inline" }}>Политика конфиденциальности</a>
              <a style={{ display: "inline" }}>Условия</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }

  window.GSLFooter = Footer;
})();
