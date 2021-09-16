import React from "react";

export default function Footer() {
  const footer = { link: "https://www.skrthbyk.com/" };

  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left"></nav>
          <div className="copyright ml-auto text-center">
            Copyright © <a href={footer.link}>Şükrü Taha Bıyık</a> 2021. Tüm
            hakları saklıdır.
          </div>
        </div>
      </footer>
    </>
  );
}
