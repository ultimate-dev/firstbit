import React from "react";
import { RiGithubFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function () {
  return (
    <React.Fragment>
      <div className="w-100 text-end mb-2 px-3">
        <Link to="/legal/privacy-policy" className="mx-2">
          Gizlilik Politikası
        </Link>
        <Link to="/legal/terms-of-use" className="mx-2">
          Kullanım Koşulları
        </Link>
      </div>
      <div className="app-footer">
        <span className="m-2">Şükrü Taha Bıyık</span>
        <span>-</span>
        <a href="https://www.skrthbyk.com/" className="m-2">
          www.skrthbyk.com
        </a>
        <span>-</span>
        <a
          href="https://github.com/ultimate-dev"
          className="text-info ms-2 m-1"
        >
          <RiGithubFill size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/sukru-taha-biyik/"
          className="text-info m-1"
        >
          <RiLinkedinFill size={22} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCyM1FbEVSxRqhTBSIpop3PA"
          className="text-info m-1"
        >
          <RiYoutubeFill size={22} />
        </a>
      </div>
    </React.Fragment>
  );
}
