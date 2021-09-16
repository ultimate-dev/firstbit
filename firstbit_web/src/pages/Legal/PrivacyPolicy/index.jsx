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
          <div className="h4 text-muted">Gizlilik Politikasi</div>
        </div>
      </div>
      <div className="app-content">
        <div className="section">
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <iframe
                      src="https://giphy.com/embed/11V3dAPYzVNP8s"
                      width="480"
                      height="360"
                      frameBorder="0"
                      class="giphy-embed"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p>
                    Üyelik veya Sistem içerisindeki çeşitli form ve anketlerin
                    doldurulması suretiyle üyelerin kendileriyle ilgili bir
                    takım kişisel bilgileri (isim-soyisim, e-posta adresleri
                    gibi) sistemin doğası gereği toplanmaktadır.
                  </p>
                  <p>
                 Hic bir göruntu verisi sizin isteğıniz haricinde barırndırılmamaktadır.
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
