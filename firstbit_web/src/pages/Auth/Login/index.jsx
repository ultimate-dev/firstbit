import React, { useState, useEffect } from "react";
import LogoLong from "../../../assets/images/logo-long.png";
import { Button, Checkbox, message } from "antd";
import { Link, useHistory } from "react-router-dom";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const rememberMeValues = JSON.parse(localStorage.getItem("rememberMe"));

  async function onLogOut() {
    localStorage.removeItem("userToken");
    removeUser();
  }

  async function onLogin() {
    showLoading();
    await post("auth/login", { email, password }).then((res) => {
      if (res.result) {
        onRememberMe();
        localStorage.setItem("userToken", res.token);
        setUser(res.user);
        history.push("/account");
      } else {
        message.error(res.message);
      }
    });
    hideLoading();
  }

  function onEnterKeyPress(e) {
    if (e.keyCode == 13) {
      onLogin();
    }
  }

  function onRememberMe() {
    if (rememberMe)
      localStorage.setItem("rememberMe", JSON.stringify({ email, password }));
    else localStorage.removeItem("rememberMe");
  }

  useEffect(() => {
    onLogOut();
    if (rememberMeValues) {
      setEmail(rememberMeValues.email);
      setPassword(rememberMeValues.password);
      setIsRemember(true);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="app-page-auth">
      <div className="app-page-auth-wrapper shadow">
        <img src={LogoLong} className="logo mb-5" />
        <div className="mb-3">
          <label>demo@demo.com</label>
          <input
            type="email"
            className={"form-control" + (isRemember ? " bg-soft-primary" : "")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={onEnterKeyPress}
            placeholder="E-Posta"
          />
        </div>
        <div className="mb-3">
          <label>123456789</label>
          <input
            type="password"
            className={"form-control" + (isRemember ? " bg-soft-primary" : "")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={onEnterKeyPress}
            placeholder="Şifre"
          />
        </div>
        <div className="mb-3">
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          >
            Beni Hatırla
          </Checkbox>
        </div>
        <div className="mt-4">
          <Button className="btn btn-primary w-100" onClick={onLogin}>
            Giriş Yap
          </Button>
          <Link to="/auth/register">
            <Button className="btn btn-white text-primary mt-3 w-100">
              Kayit Ol
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
