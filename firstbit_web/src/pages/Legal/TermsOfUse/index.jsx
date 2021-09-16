import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../assets/images/logo-long.png";

export default function Page() {
  return (
    <React.Fragment>
      <div className="app-header">
        <div className="app-header-body text-dark p-5">
          <Link className="logo" to="/home">
            <img src={LogoImg} />
          </Link>
          <div className="h4 text-muted">Kullanim Kosullari</div>
        </div>
      </div>
      <div className="app-content">
        <div className="section">
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="mb-5">Son güncellenme: 09.06.2021</h5>
                  <div className="mb-4">
                    <iframe
                      src="https://giphy.com/embed/RMTQiRYAuvvJb1k6al"
                      width="480"
                      height="276"
                      frameBorder="0"
                      class="giphy-embed"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p>
                    Sevgili ziyaretçimiz, lütfen bu web siteyi ve apiyi
                    kullanmaya başlamadan önce kullanım koşulları sözleşmesini
                    dikkatlice okuyunuz. Siteye erişiminiz tamamen bu sözleşmeyi
                    kabulünüze ve bu sözleşme ile belirlenen şartlara uymanıza
                    bağlıdır. Şayet bu sözleşmede yazan herhangi bir koşulu
                    kabul etmiyorsanız, lütfen siteye erişiminizi sonlandırınız.
                    Siteye erişiminizi sürdürdüğünüz takdirde, koşulsuz ve
                    kısıtlamasız olarak, sözleşme metninin tamamını kabul
                    ettiğinizin, tarafımızca varsayılacağını lütfen unutmayınız.
                  </p>
                  <p>
                    FirstBit'de yayınlanan tüm metin, kod, grafikler, logolar,
                    resimler, ses dosyaları ve kullanılan yazılımın sahibi
                    (bundan böyle ve daha sonra "içerik" olarak anılacaktır)
                    Şirket Adı olup, tüm hakları saklıdır. Yazılı izin
                    olmaksızın site içeriğinin çoğaltılması veya kopyalanması
                    kesinlikle yasaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
