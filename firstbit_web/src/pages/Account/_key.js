import React, { useState, useEffect } from "react";
import { get, post } from "../../helpers/http.helper";
import { hideLoading, showLoading } from "../../redux/actions";
import { message, Button } from "antd";
import { useHistory } from "react-router";
export default function () {
  let history = useHistory();
  let [key, setKey] = useState("");

  async function getKey() {
    showLoading();
    await get("api/account/key").then((res) => {
      if (res.result) {
        setKey(res.key);
      } else {
        message.error(res.message);
      }
    });
    hideLoading();
  }

  async function newKey(run) {
    showLoading();
    await post("api/account/key").then((res) => {
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
    getKey();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12 mb-3">
            <lanel>Ad</lanel>
            <input className="form-control" value={key} disabled={true} />
          </div>
          <div className="col-md-12 mb-3">
            <Button
              className="btn btn-primary"
              onClick={() =>
                newKey(() => {
                  getKey();
                })
              }
            >
              Yeni Key
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
