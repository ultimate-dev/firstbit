import React, { useState } from "react";
import { get, post } from "../../helpers/http.helper";
import { hideLoading, showLoading } from "../../redux/actions";
import { message, Button } from "antd";
import { useHistory } from "react-router";
export default function () {
  let history = useHistory();
  let [email, setEmail] = useState({
    current: "",
    new: "",
  });
  async function saveEmail(run) {
    showLoading();
    await post("api/account/email", {
      new_email: email.new,
      current_email: email.current,
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
            <lanel>Mevcut E-Posta</lanel>
            <input
              className="form-control"
              value={email.current}
              onChange={(e) =>
                setEmail({ ...email, current: e.target.value })
              }
            />
          </div>
          <div className="col-md-6 mb-3">
            <lanel>Yeni E-Posta</lanel>
            <input
              className="form-control"
              value={email.new}
              onChange={(e) =>
                setEmail({ ...email, new: e.target.value })
              }
            />
          </div>
          <div className="col-md-12 mb-3">
            <Button
              className="btn btn-primary"
              onClick={() =>
                saveEmail(() => {
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
