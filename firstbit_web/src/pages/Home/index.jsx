import React from "react";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import {
  RiShieldCheckFill,
  RiHammerFill,
  RiChatHistoryFill,
} from "react-icons/ri";
// Locale
import I18n from "../../locales";
// Actions
import { hideLoading, onTest, showLoading } from "../../redux/actions";
import { useSelector } from "react-redux";
// Helpers
import { post, put, get, del } from "../../helpers/http.helper";
import LogoImg from "../../assets/images/logo-long.png";
import Img1 from "../../assets/images/img1.png";
import Img2 from "../../assets/images/img2.png";
import Img3 from "../../assets/images/img3.png";
import {
  RiShieldUserLine,
  RiShieldCrossLine,
  RiTableAltLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

export default function Page() {
  let test = useSelector((state) => state.testReducer.test);
  let loading = useSelector((state) => state.loadingReducer.loading);

  const backImage =
    "https://images.pexels.com/photos/1493079/pexels-photo-1493079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <React.Fragment>
      <div
        className="app-header app-header-big"
        style={{ backgroundImage: "url(" + backImage + ")" }}
      >
        <div className="app-header-body">
          <Link className="logo" to="/home">
            <img src={LogoImg} />
          </Link>
          <div className="title">Merhaba, Hoşgeldiniz</div>
          <p className="desc">
            FirstBit, Bir sıkıştırma sistemlerini etkin bir şekilde
            kullanabileceginiz bir web site ve api sisteminin genel adıdır.
          </p>
          <div className="">
            <Link to="/studio">
              <Button className="btn btn-white text-primary m-2">Stüdyo</Button>
            </Link>
            <Link to="/documentation">
              <Button className="btn btn-primary text-white m-2">
                Hemen Başla
              </Button>
            </Link>
          </div>
        </div>

        <div className="overlay"></div>
      </div>
      <div className="app-content">
        <div className="row" style={{ marginTop: -60 }}>
          <div className="col-md-4 p-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <RiShieldCheckFill
                    className="text-info"
                    size={50}
                    style={{ minWidth: 50 }}
                  />
                  <div className="ms-3">
                    <h5>Güvenilir</h5>
                    <div className="text-muted">
                      Gorüntuleriniz kaydedilmeden sıkıştırılip çıktı
                      döndürülmektedir.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <RiHammerFill
                    className="text-info"
                    size={50}
                    style={{ minWidth: 50 }}
                  />
                  <div className="ms-3">
                    <h5>Geliştirilebilir</h5>
                    <div className="text-muted">
                      Kişiselleştirme özellikleri sayesinde göruntulerinizi
                      anlik olarak görebilirsiniz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <RiChatHistoryFill
                    className="text-info"
                    size={50}
                    style={{ minWidth: 50 }}
                  />
                  <div className="ms-3">
                    <h5>Hızlı</h5>
                    <div className="text-muted">
                      Çoklu seçim özelligi ile resimlerinizi daha hizli bir
                      sekilde işleyebilirsiniz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6 p-3">
              <Link to="/about">
                <Button className="btn btn-info w-100 p-4">
                  <RiShieldUserLine size={24} className="me-2" />
                  HAKKIMIZDA
                </Button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 p-3">
              <Link to="/documentation">
                <Button className="btn btn-info w-100 p-4">
                  <RiCodeSSlashLine size={24} className="me-2" />
                  DOKUMANTASYON
                </Button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 p-3">
              <Link to="/studio">
                <Button className="btn btn-info w-100 p-4">
                  <RiTableAltLine size={24} className="me-2" />
                  STUDYO
                </Button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 p-3">
              <Link to="/support">
                <Button className="btn btn-info w-100 p-4">
                  <RiShieldCrossLine size={24} className="me-2" />
                  DESTEK & YARDIM
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <img
                        src={Img1}
                        width="100%"
                        className="rounded"
                        height="300px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-7 text-center">
                      <h2 className="fw-bold text-muted">Roket Hızında</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-7 text-center">
                      <h2 className="fw-bold text-muted">Destek & Yardım</h2>
                    </div>
                    <div className="col-5">
                      <img
                        src={Img2}
                        width="100%"
                        className="rounded"
                        height="300px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <img
                        src={Img3}
                        width="100%"
                        className="rounded"
                        height="300px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-7 text-center">
                      <h2 className="fw-bold text-muted">Detaylı Veri</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
