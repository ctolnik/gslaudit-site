// GSL Audit website — Footer
(function () {
  const React = window.React;
  const I = window.GSLIcons;
  const { contacts } = window.GSLData;

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
                <span style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--neutral-300)", fontSize: "var(--fs-small)" }}><I.Phone width={16} height={16} /> {contacts.phones[0]}</span>
                <span style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--neutral-300)", fontSize: "var(--fs-small)" }}><I.Mail width={16} height={16} /> {contacts.email}</span>
                <span style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "var(--neutral-300)", fontSize: "var(--fs-small)" }}><I.MapPin width={16} height={16} /> {contacts.address}</span>
              </div>
            </div>
            <Col title="Услуги" navigate={navigate} links={["Аудит", "Бухгалтерия", "Налоговый консалтинг", "Юридические услуги"]} />
            <Col title="Международное" navigate={navigate} links={["КИК", "Зарубежные счета", "МСФО", "Открытие счетов"]} />
            <Col title="Компания" navigate={navigate} links={["О нас", "Команда", "Блог", "Контакты"]} />
          </div>
          <div className="ftr__bottom">
            <span>© 2026 GSL Audit (ДЖИ ЭС ЭЛЬ-АУДИТ). Все права защищены.</span>
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
