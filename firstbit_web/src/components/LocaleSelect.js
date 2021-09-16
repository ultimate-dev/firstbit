import React, { useState } from "react";
//I18n
import { changeLocale, getLocale } from "../locales";
//Flags
import FlagTR from "../assets/images/flag_tr.png";
import FlagEN from "../assets/images/flag_en.png";


export default function LocaleSelect() {
  let [active, setActive] = useState(false);
  return (
    <div className={"app-locales" + (active ? " show" : "")}>
      <div className="app-locales-title" onClick={() => setActive(!active)}>
        {getLocale() == "tr" ? <img src={FlagTR} /> : null}
        {getLocale() == "en" ? <img src={FlagEN} /> : null}
      </div>
      <div className="app-locales-menu">
        {getLocale() !== "tr" ? (
          <div className="app-locales-item" onClick={() => changeLocale("tr")}>
            <img src={FlagTR} />
          </div>
        ) : null}
        {getLocale() !== "en" ? (
          <div className="app-locales-item" onClick={() => changeLocale("en")}>
            <img src={FlagEN} />
          </div>
        ) : null}
      </div>
    </div>
  );
}