import React, { useEffect } from "react";
import { useLocation } from "react-router";

export default function ({ children = null }) {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <React.Fragment>{children}</React.Fragment>;
}
