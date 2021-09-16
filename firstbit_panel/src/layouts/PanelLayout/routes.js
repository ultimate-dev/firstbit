import React from "react";
import { Redirect, Route, Switch } from "react-router";
//Components
import * as Header from "./Header";
//Pages
const DashboardPage = React.lazy(() =>
  import("../../pages/panel/Dashboard/DashboardPage")
);
const AccountPage = React.lazy(() =>
  import("../../pages/panel/Account/AccountPage")
);
const SettingsPage = React.lazy(() =>
  import("../../pages/panel/Account/SettingsPage")
);
//Users
const UsersPage = React.lazy(() => import("../../pages/panel/Users/UsersPage"));
const UsersBanPage = React.lazy(() =>
  import("../../pages/panel/Users/UsersBanPage")
);

//Roots
const ErrorPage = React.lazy(() =>
  import("../../pages/roots/errors/ErrorPage")
);

export default function Routes() {
  const suffix = "/panel";
  return (
    <Switch>
      {/**Routes */}
      <Route
        path={suffix + "/dashboard"}
        render={(props) => <DashboardPage {...props} Header={Header} />}
        exact
      />
      {/**Account */}
      <Route
        path={suffix + "/account"}
        render={(props) => <AccountPage {...props} Header={Header} />}
        exact
      />
      <Route
        path={suffix + "/settings"}
        render={(props) => <SettingsPage {...props} Header={Header} />}
        exact
      />
      {/**Users */}
      <Route
        path={suffix + "/users/list"}
        render={(props) => <UsersPage {...props} Header={Header} />}
        exact
      />
      <Route
        path={suffix + "/users/ban"}
        render={(props) => <UsersBanPage {...props} Header={Header} />}
        exact
      />
      <Redirect from={suffix + "/users"} to={suffix + "/users/list"} exact />
      {/**Redirects */}
      <Redirect from={suffix + "/"} to={suffix + "/dashboard"} exact />
      {/**Roots */}
      <Route
        path={suffix + "/*"}
        render={(props) => (
          <ErrorPage
            code="404"
            label="Sayfa Bulunamadı"
            desc="Aradığınız Sayfaya Ulaşamıyoruz."
            {...props}
          />
        )}
        exact
      />
    </Switch>
  );
}
