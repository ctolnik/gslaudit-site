// GSL Audit website — App shell with simple client-side routing
(function () {
  const React = window.React;
  const Header = window.GSLHeader;
  const Footer = window.GSLFooter;
  const pages = {
    home: window.GSLHomePage,
    service: window.GSLServicePage,
    contacts: window.GSLContactsPage,
  };

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
      </div>
    );
  }

  window.GSLApp = App;
})();
