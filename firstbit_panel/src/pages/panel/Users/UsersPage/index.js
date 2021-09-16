import { message } from "antd";
import React, { useEffect, useState } from "react";
//Components
import { Content } from "../../../../components";
import { get, post } from "../../../../helpers/http.helper";
import {
  hideLoading,
  showDialog,
  showLoading,
} from "../../../../redux/actions";
import DataTable from "./DataTable";

export default function Page({ Header }) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    showLoading();
    await get("api/users/list").then((res) => {
      if (res.result) {
        setUsers(res.users);
      } else {
        message.error(res.message);
      }
      hideLoading();
    });
  }
  async function onBanUser(id) {
    showLoading();
    await post("api/users/ban", { user_id: id }).then((res) => {
      if (res.result) {
        message.success(res.message);
        getUsers();
      } else {
        message.error(res.message);
      }
      hideLoading();
    });
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="page-inner">
      <Header.Breadcrumb
        breadcrumb={[
          {
            name: "Kullanıcılar",
            to: "/users/list",
          },
        ]}
        head="Kullanıcı Liste"
      />
      <Content>
        <div className="row">
          <div class="col-md-12">
            <div class="card full-height">
              <div class="card-body">
                <DataTable
                  items={users}
                  onBan={(id) =>
                    showDialog("ok", {
                      message: "Kullanıcıyı Banlamak İstediğinize Eminmisiniz?",
                      onOk: () => onBanUser(id),
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
