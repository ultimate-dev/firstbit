import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LogoLong from "../../../assets/images/logo-long.png";
import { Button, message } from "antd";
import { Link } from "react-router-dom";
// Helpers
import { post } from "../../../helpers/http.helper";
// Actions
import {
  showLoading,
  hideLoading,
  setUser,
  removeUser,
} from "../../../redux/actions";

export default function Page() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  async function onRegister() {
    showLoading();

    await post("auth/register", {
      name,
      surname,
      email,
      password,
      rePassword,
    }).then((res) => {
      if (res.result) {
        console.log(res);
        history.push("/auth/login");
        message.success(res.message);
      } else {
        message.error(res.message);
      }
    });
    hideLoading();
  }

  return (
    <div className="app-page-auth">
      <div className="app-page-auth-wrapper shadow">
        <img src={LogoLong} className="logo mb-5" />
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Soyad"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="E-Posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Şifre Tekrar"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <Button className="btn btn-primary w-100" onClick={onRegister}>
            Kayit Ol
          </Button>
          <Link to="/auth/login">
            <Button className="btn btn-white text-primary mt-3 w-100">
              Giriş Yap
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
