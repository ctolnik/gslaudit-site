// GSL Audit website — Header
(function () {
  const React = window.React;
  const { Button } = window.GSLAuditDesignSystem_166977;
  const I = window.GSLIcons;
  const { navServices } = window.GSLData;

  function Header({ navigate }) {
    return (
      <header className="hdr">
        <div className="container hdr__row">
          <img className="hdr__logo" src="../../assets/logos/gsl-logo-primary.svg" alt="GSL Audit"
               style={{ cursor: "pointer" }} onClick={() => navigate("home")} />
          <nav className="hdr__nav">
            {navServices.map((s) => (
              <span key={s} className="hdr__link" onClick={() => navigate("service")}>{s}</span>
            ))}
            <span className="hdr__link" onClick={() => navigate("home")}>Блог</span>
            <span className="hdr__link" onClick={() => navigate("contacts")}>Контакты</span>
          </nav>
          <div className="hdr__spacer" />
          <div className="hdr__actions">
            <span className="hdr__phone">+7 495 234-38-44</span>
            <Button variant="primary" size="sm" onClick={() => navigate("contacts")}>Оставить заявку</Button>
            <button className="hdr__burger gsl-iconbtn gsl-iconbtn--ghost"
              style={{ width: 42, height: 42, border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)", background: "transparent", color: "var(--text-strong)", alignItems: "center", justifyContent: "center" }}
              aria-label="Меню">
              <I.Menu width={20} height={20} />
            </button>
          </div>
        </div>
      </header>
    );
  }

  window.GSLHeader = Header;
})();
