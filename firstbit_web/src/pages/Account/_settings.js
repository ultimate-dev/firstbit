import React, { useState, useEffect } from "react";
import { get, post } from "../../helpers/http.helper";
import { hideLoading, showLoading } from "../../redux/actions";
import { message, Button } from "antd";
import { useHistory } from "react-router";
export default function () {
  let history = useHistory();
  let [account, setAccount] = useState({
    name: "",
    surname: "",
  });

  async function getAccount() {
    showLoading();
    await get("api/account").then((res) => {
      if (res.result) {
        setAccount(res.account);
      } else {
        message.error(res.message);
      }
    });
    hideLoading();
  }

  async function saveAccount(run) {
    showLoading();
    await post("api/account", {
      name: account.name,
      surname: account.surname,
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

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 mb-3">
            <lanel>Ad</lanel>
            <input
              className="form-control"
              value={account.name}
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
            />
          </div>
          <div className="col-md-6 mb-3">
            <lanel>Soyad</lanel>
            <input
              className="form-control"
              value={account.surname}
              onChange={(e) =>
                setAccount({ ...account, surname: e.target.value })
              }
            />
          </div>
          <div className="col-md-12 mb-3">
            <Button
              className="btn btn-primary"
              onClick={() =>
                saveAccount(() => {
                  getAccount();
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
