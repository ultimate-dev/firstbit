import React, { useEffect } from "react";
import I18n, { default_lang } from "../locales";
import moment from "moment";
// Moment - Locale
import "moment/locale/tr";
import "moment/locale/en-gb";
// Routes
import Routes from "./routes";
// Elements
import Sidebar from "../elements/Sidebar";
import Footer from "../elements/Footer";

function App() {
  // Locale
  useEffect(() => {
    let localStrogeLang = localStorage.getItem("locale");
    let _lang = "tr";
    if (localStrogeLang) {
      _lang = localStrogeLang;
    } else {
      _lang = default_lang;
    }
    // I18n locale
    I18n.locale = _lang;
    // localStoge locale lang
    localStorage.setItem("locale", _lang);
    // moment locale
    moment.locale(_lang);
    // html tag lang
    document.documentElement.lang = _lang;
  }, []);

  return (
    <React.Fragment>
      <div className="app">
        <Sidebar />
        <div className="app-main">
          <Routes />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
