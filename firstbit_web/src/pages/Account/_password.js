import React, { useState } from "react";
import { get, post } from "../../helpers/http.helper";
import { hideLoading, showLoading } from "../../redux/actions";
import { message, Button } from "antd";
import { useHistory } from "react-router";
export default function () {
  let history = useHistory();
  let [password, setPassword] = useState({
    current: "",
    new: "",
    reNew: "",
  });
  async function savePassword(run) {
    showLoading();
    await post("api/account/password", {
      current_pass: password.current,
      new_pass: password.new,
      re_new_pass: password.reNew,
    }).then((res) => {
      if (res.result) {
        message.success(res.message);
        run();
      } else {
        message.error(res.message);
      }
    });
    hideLoading();
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 mb-3">
            <lanel>Mevcut Şifre</lanel>
            <input
              type="password"
              className="form-control"
              value={password.current}
              onChange={(e) =>
                setPassword({ ...password, current: e.target.value })
              }
            />
          </div>
          <div className="col-md-6 mb-3">
            <lanel>Yeni Şifre</lanel>
            <input
              type="password"
              className="form-control"
              value={password.new}
              onChange={(e) =>
                setPassword({ ...password, new: e.target.value })
              }
            />
          </div>
          <div className="col-md-6 mb-3">
            <lanel>Yeni Şifre Tekrar</lanel>
            <input
              type="password"
              className="form-control"
              value={password.reNew}
              onChange={(e) =>
                setPassword({ ...password, reNew: e.target.value })
              }
            />
          </div>
          <div className="col-md-12 mb-3">
            <Button
              className="btn btn-primary"
              onClick={() =>
                savePassword(() => {
                  history.push("/auth/login");
                })
              }
            >
              Kaydet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
