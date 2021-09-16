import React, { useState } from "react";
import { Table, Button } from "antd";
import moment from "moment";
import Avatar from "antd/lib/avatar/avatar";
import { IoBan } from "react-icons/io5";

export default function DataTable({ items = [], onBan }) {
  const columns = [
    {
      title: "",
      dataIndex: "user_id",
      key: "user_id",
      width: 56,
      fixed: "left",
      render: (p) => (
        <small>
          <Button className="btn btn-danger p-2" onClick={() => onBan(p)}>
            <IoBan size={20} className="text-white" />
          </Button>
        </small>
      ),
    },
    {
      title: "Profil",
      dataIndex: "name",
      key: "name",
      width: 250,
      render: (p, r, i) => (
        <div className="d-flex align-items-center">
          <Avatar size={40} src={r.image}>
            {String(r.name).substring(0, 1) + String(r.surname).substring(0, 1)}
          </Avatar>
          <div className="ml-2">
            <div>
              <small>{r.name}</small>
            </div>
            <div>
              <small className="text-muted">{r.surname}</small>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "E-Posta",
      dataIndex: "email",
      key: "email",
      width: 200,
      render: (p) => <small>{p}</small>,
    },

    {
      title: "Kayıt Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (p) => (
        <small className="text-muted">
          {moment(p).format("DD.MM.yyyy - HH.mm")}
        </small>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={items}
        columns={columns}
        scroll={{ x: 991 }}
        size="middle"
      />
    </>
  );
}
