import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo-long.png";

export default function Page() {
  return (
    <React.Fragment>
      <div className="app-header">
        <div className="app-header-body text-dark p-5">
          <Link className="logo" to="/home">
            <img src={LogoImg} />
          </Link>
          <div className="h4 text-muted">Hakkımızda</div>
        </div>
      </div>
      <div className="app-content">
        <div className="section">
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body">
                  <p>
                    <h5>Kim? </h5>
                    Merhaba, Ben Şükrü Taha Bıyık, Firat Üniversitesi Teknoloji
                    Fakültesi Yazılım Mühendisliği Ögrencisiyim.
                  </p>
                  <p>
                    <h5>Ne? </h5>
                    Şu anda gezinmekte olduğunuz website 2. Sınıf dersim olan
                    İleri Programlama Teknikleri desimin proje ödevidir.
                  </p>
                  <p>
                    <h5>Nasıl? </h5>
                    Bu website ve apiyi geliştirirken ağırlıklı olarak{" "}
                    <mark>javascript</mark> kullandım. Web için{" "}
                    <mark>React</mark> ve Api için <mark>Node.js</mark>{" "}
                    yardımlarıyla kurlulumlarını gerçekleştirdim. Görüntü
                    Sıkıştırma algoritmarı için{" "}
                    <mark>imagemin, sharp, node-flif</mark> hazır paketlerinden
                    yararlandım.
                  </p>
                  <p>
                    <h5>Neden? </h5>
                    Bu Proje kapsamında bazı algoritmaları ve muhendislik
                    becerilerimizi geliştirmek için görüntü sıkıştırma
                    algoritmalarını incelememiz istendi. Hazırladıgım bu web
                    site ve api sayesinde bu tarz sıkıştırma gereksinimlerine
                    ihtiyaç duyan sistemler kolaylıkla bu gereksinimlerini
                    gidermeleri hedeflenmiştir.
                  </p>
                  <p>
                    <h5>Nerede? </h5>
                    Bu proje her türlü platformdan erişilebiecek şekilde
                    tasarlandı. Proje açık kaynak kodlu olup güvenli ve
                    gelistirilebilir olmata.
                  </p>
                  <p>
                    <h5>Ne Zaman? </h5>
                    Proje 2021 yılında uzaktan eğitim sürecinde
                    gerçekleştirilmiştir. Korona yüzünden yüz yüze ders
                    yapamadığımız bu süreci kendim için bir avantaja cevirdiğimı
                    düşünüyorum.
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
