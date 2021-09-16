import React, { useState, useEffect } from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import { message } from "antd";
// Helper
import { post } from "../helpers/http.helper";
// Actions
import {
  showLoading,
  hideLoading,
  setUser,
  removeUser,
} from "../redux/actions";
// Pages
//> Auth
const Login = React.lazy(() => import("../pages/Auth/Login"));
const Register = React.lazy(() => import("../pages/Auth/Register"));
// Home
const Home = React.lazy(() => import("../pages/Home"));
// About
const About = React.lazy(() => import("../pages/About"));
// Support
const Support = React.lazy(() => import("../pages/Support"));
// Legal
const PrivacyPolicy = React.lazy(() => import("../pages/Legal/PrivacyPolicy"));
const TermsOfUse = React.lazy(() => import("../pages/Legal/TermsOfUse"));
// Documentation
const Documentation = React.lazy(() => import("../pages/Documentation"));
// Algorithms
const Algorithms = React.lazy(() => import("../pages/Algorithms"));
// Account
const Account = React.lazy(() => import("../pages/Account"));


export default function Routes() {
  const [verify, setVerify] = useState(true);
  let location = useLocation();
  //Verify
  useEffect(() => {
    onVerify();
  }, [location.pathname]);
  let token = localStorage.getItem("userToken");

  async function onVerify() {
    showLoading();
    let token = localStorage.getItem("userToken");
    if (token) {
      await post("auth/verify", { token }).then((res) => {
        if (res.result) {
          setVerify(true);
          setUser(res.user);
          localStorage.setItem("userToken", res.token);
        } else {
          setVerify(false);
          removeUser();
          localStorage.removeItem("userToken");
          message.error(res.message);
        }
      });
    } else {
      removeUser();
      setVerify(false);
    }
    hideLoading();
  }

  return (
    <Switch>
      {
        // Auth
      }
      <Route
        path={["/auth", "/auth/login"]}
        render={(props) => <Login {...props} />}
        exact
      />
      <Route
        path="/auth/register"
        render={(props) => <Register {...props} />}
        exact
      />
      {
        // Home
      }
      <Route
        path={["/", "/home"]}
        render={(props) => <Home {...props} />}
        exact
      />
      {
        // About
      }
      <Route path="/about" render={(props) => <About {...props} />} exact />
      {
        // Support
      }
      <Route path="/support" render={(props) => <Support {...props} />} exact />
      {
        // Legal
      }
      <Route
        path="/legal/privacy-policy"
        render={(props) => <PrivacyPolicy {...props} />}
        exact
      />
      <Route
        path="/legal/terms-of-use"
        render={(props) => <TermsOfUse {...props} />}
        exact
      />
      {
        // Documentation
      }
      <Route
        path="/documentation"
        render={(props) => <Documentation {...props} />}
        exact
      />
      {
        // Algorithms
      }
      <Route
        path="/studio"
        render={(props) => <Algorithms {...props} />}
        exact
      />
      {
        // Account
      }
      {token ? (
        <Route path="/account" render={(props) => <Account {...props} />} />
      ) : (
        <Redirect from={"/account"} to={"/auth/login"} />
      )}
      {
        // Root
      }
      <Route
        path="/*"
        render={(props) => <div className="app-page-err">404</div>}
        exact
      />
    </Switch>
  );
}
