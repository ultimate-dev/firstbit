import React, { useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export const Dashboard = connect(mapStateToProps)(function ({ user }) {
  const admin = {
    name: user.name,
    surname: user.surname,
  };
  useEffect(() => {
    setTitle("Gösterge Paneli");
  }, []);
  return (
    <div className="panel-header bg-primary-gradient">
      <div className="page-inner py-5">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
          <div>
            <h2 className="text-white pb-2 fw-bold">Gösterge Paneli</h2>
            <h5 className="text-white op-7 mb-2">
              <span>Hoşgeldiniz,</span>
              <span className="h3">
                {" " + admin.name + " " + admin.surname}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
});

export const Breadcrumb = withRouter(function ({
  breadcrumb = [],
  head = "",
  location,
}) {
  useEffect(() => {
    setTitle(head);
  }, []);
  return (
    <div className="page-header">
      <h4 className="page-title">{head}</h4>
      <ul className="breadcrumbs">
        <li className="nav-home">
          <Link to="/panel">
            <BiHomeAlt size={20} />
          </Link>
        </li>
        <li className="separator">
          <BsChevronRight size={14} />
        </li>
        {breadcrumb.map((p, i) => (
          <>
            <li className="nav-item" key={i}>
              <Link to={"/panel" + p.to}>{p.name}</Link>
            </li>
            <li className="separator" key={i}>
              <BsChevronRight size={14} />
            </li>
          </>
        ))}

        <li className="nav-item">
          <Link to={location.pathname}>{head}</Link>
        </li>
      </ul>
    </div>
  );
});

function setTitle(head) {
  document.title = head + " | Siba Panel";
}
