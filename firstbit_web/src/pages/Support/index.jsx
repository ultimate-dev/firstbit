import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo-long.png";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMediumSquare,
  AiFillGithub,
} from "react-icons/ai";

export default function Page() {
  return (
    <React.Fragment>
      <div className="app-header">
        <div className="app-header-body text-dark p-5">
          <Link className="logo" to="/home">
            <img src={LogoImg} />
          </Link>
          <div className="h4 text-muted">Destek & Yardım</div>
        </div>
      </div>
      <div className="app-content">
        <div className="section">
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4 className="mb-5">
                    Merhba, Seni tanıyor gibiyim. Aaa! Yardıma mı ihtiyacın var?
                  </h4>

                  <div className="mb-5">
                    <iframe
                      src="https://giphy.com/embed/TjM5nw1uiSvsPgNm1x"
                      width="300px"
                      height="300px"
                      frameBorder="0"
                      class="giphy-embed"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <h6>Hadi daha fazla gecikme. hemen iletişime geç.</h6>
                  <div className="d-inline-flex mt-5">
                    <div>
                      <a href="" style={{ color: "#4064AC" }}>
                        <AiFillFacebook size="50" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://twitter.com/skrthbyk"
                        style={{ color: "#2F8AD0" }}
                      >
                        <AiFillTwitterSquare size="50" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.youtube.com/channel/UCyM1FbEVSxRqhTBSIpop3PA"
                        style={{ color: "#ED3833" }}
                      >
                        <AiFillYoutube size="50" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/skrthbyk/"
                        style={{ color: "#1766C2" }}
                      >
                        <AiFillLinkedin size="50" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/ultimate-dev"
                        style={{ color: "#14191E" }}
                      >
                        <AiFillGithub size="50" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.instagram.com/skrthbyk"
                        style={{ color: "#B140BA" }}
                      >
                        <AiFillInstagram size="50" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://medium.com/@skrthbyk"
                        style={{ color: "#100F0D" }}
                      >
                        <AiFillMediumSquare size="50" />
                      </a>
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
