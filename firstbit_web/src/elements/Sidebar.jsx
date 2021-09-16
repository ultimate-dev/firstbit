import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  RiHome2Line,
  RiUser3Line,
  RiGalleryLine,
  RiShieldUserLine,
  RiShieldCrossLine,
  RiLayoutMasonryLine,
  RiCodeSSlashLine,
  RiLoginBoxFill,
} from "react-icons/ri";
import LocaleSelect from "../components/LocaleSelect";
import Avatar from "antd/lib/avatar/avatar";
import { useSelector } from "react-redux";

export default function () {
  let user = useSelector((state) => state.userReducer.user);
  let token = localStorage.getItem("userToken");

  return (
    <div className="app-sidebar">
      <div className="text-center pt-2">
        {token ? (
          <Link to="/account">
            <Avatar
              className="bg-soft-primary text-primary mb-3"
              size={40}
              shape="square"
            >
              {user?.letters}
            </Avatar>
          </Link>
        ) : (
          <Link to="/auth/login">
            <RiLoginBoxFill className="text-primary my-3" size="24" />
          </Link>
        )}

        <LocaleSelect />
      </div>
      <div className="app-sidebar-menu">
        <NavLink
          to="/about"
          className="app-sidebar-item"
          activeClassName="text-primary"
        >
          <RiShieldUserLine size={24} />
        </NavLink>
        <NavLink
          to="/documentation"
          className="app-sidebar-item"
          activeClassName="text-primary"
        >
          <RiCodeSSlashLine size={24} />
        </NavLink>
        {user ? (
          <NavLink
            to="/account"
            className="app-sidebar-item"
            activeClassName="text-primary"
          >
            <RiUser3Line size={24} />
          </NavLink>
        ) : null}
        <NavLink
          to="/home"
          className="app-sidebar-item"
          activeClassName="text-primary"
        >
          <RiHome2Line size={24} />
        </NavLink>
        <NavLink
          to="/studio"
          className="app-sidebar-item"
          activeClassName="text-primary"
        >
          <RiLayoutMasonryLine size={24} />
        </NavLink>
        <NavLink
          to="/support"
          className="app-sidebar-item"
          activeClassName="text-primary"
        >
          <RiShieldCrossLine size={24} />
        </NavLink>
      </div>
    </div>
  );
}
