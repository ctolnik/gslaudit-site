// GSL Audit website — App shell with simple client-side routing + floating actions
(function () {
  const React = window.React;
  const Header = window.GSLHeader;
  const Footer = window.GSLFooter;
  const I = window.GSLIcons;
  const pages = {
    home: window.GSLHomePage,
    service: window.GSLServicePage,
    contacts: window.GSLContactsPage,
  };

  function Fab({ navigate }) {
    return (
      <div className="fab-stack">
        <a className="fab fab--tg" href="https://t.me/katerina_tax" target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram">
          <I.Send width={22} height={22} />
        </a>
        <a className="fab fab--wa" href="https://wa.me/74959213755" target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp">
          <I.Chat width={22} height={22} />
        </a>
        <button className="fab fab--call" onClick={() => navigate("contacts")} aria-label="Заказать звонок">
          <I.Phone width={22} height={22} />
        </button>
      </div>
    );
  }

  function App() {
    const [route, setRoute] = React.useState("home");
    const scroller = React.useRef(null);
    const navigate = (r) => {
      setRoute(r);
      if (scroller.current) scroller.current.scrollTop = 0;
    };
    const Page = pages[route] || pages.home;
    return (
      <div ref={scroller} className="site" style={{ height: "100vh", overflowY: "auto" }}>
        <Header navigate={navigate} />
        <main><Page navigate={navigate} /></main>
        <Footer navigate={navigate} />
        <Fab navigate={navigate} />
      </div>
    );
  }

  window.GSLApp = App;
})();
