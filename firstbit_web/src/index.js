import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// Redux
import store from "./redux/store";
// Styles
import "antd/dist/antd.css";
import "./assets/scss/styles.scss";
import "animate.css"
// App
import App from "./App";
// Components
import { LoadingFallback, LoadingRedux } from "./components/Loading";
import RouterScrollReset from "./components/RouterScrollReset";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingFallback />}>
      <Provider store={store}>
        <LoadingRedux />
        <Router>
          <RouterScrollReset>
            <App />
          </RouterScrollReset>
        </Router>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
