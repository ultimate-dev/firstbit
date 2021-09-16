import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import LogoImg from "../../assets/images/logo-long.png";
import { Avatar, Button } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
// S
import AccSettings from "./_settings";
import AccEmail from "./_email";
import AcccPassword from "./_password";
import AccKey from "./_key";

export default function Page() {
  let user = useSelector((state) => state.userReducer.user);

  return (
    <React.Fragment>
      <div className="app-header mb-5">
        <div className="app-header-body text-dark p-5">
          <Link className="logo" to="/home">
            <img src={LogoImg} />
          </Link>
          <div className="h4 text-muted">Profil</div>
        </div>
      </div>
      <div className="app-content mb-5">
        <div className="section">
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <Avatar size={50} className="bg-soft-primary text-primary">
                      {user?.letters}
                    </Avatar>
                    <div className="ps-3">
                      <div>{user?.name + " " + user?.surname}</div>
                      <div className="text-info">{user?.email}</div>
                      <small className="text-muted">
                        {moment(user?.createdAt).format("DD.MM.yyyy")}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="card mt-4">
                  <div className="card-body">
                    <div className="">
                      <div className="w-100 mb-3">
                        <Link to="/auth/login">
                          <Button className="btn btn-soft-danger p-2 w-100">
                            Çıkış Yap
                          </Button>
                        </Link>
                      </div>
                      <div className="w-100 mb-3">
                        <Link to="/account/settings">
                          <Button className="btn btn-soft-primary p-2 w-100">
                            Profil Ayarları
                          </Button>
                        </Link>
                      </div>
                      <div className="w-100 mb-3">
                        <Link to="/account/email">
                          <Button className="btn btn-soft-primary p-2 w-100">
                            E-Posta Degistir
                          </Button>
                        </Link>
                      </div>
                      <div className="w-100 mb-3">
                        <Link to="/account/password">
                          <Button className="btn btn-soft-primary p-2 w-100">
                            Sifre Degistir
                          </Button>
                        </Link>
                      </div>
                      <div className="w-100 mb-3">
                        <Link to="/account/api">
                          <Button className="btn btn-soft-primary p-2 w-100">
                            Api Key
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 p-3">
              <Switch>
                <Route
                  exact
                  path={["/account/settings", "/account"]}
                  component={AccSettings}
                />
                <Route exact path={"/account/email"} component={AccEmail} />
                <Route
                  exact
                  path={"/account/password"}
                  component={AcccPassword}
                />
                <Route exact path={"/account/api"} component={AccKey} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
