import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { useQuery } from "../../hooks/use-query";
import { Button } from "antd";
import {
  RiCloseLine,
  RiArrowLeftLine,
  RiSubtractFill,
  RiHome2Line,
} from "react-icons/ri";
import LogoImg from "../../assets/images/logo-short.png";

const algs_list = [
  {
    name: "JPEG",
    value: "jpeg",
  },
  {
    name: "PNG",
    value: "png",
  },
  {
    name: "SVG",
    value: "svg",
  },
  {
    name: "FLIF",
    value: "flif",
  },
  {
    name: "TIFF",
    value: "tiff",
  },
  {
    name: "GIF",
    value: "gif",
  },
  {
    name: "WEBP",
    value: "webp",
  },
  {
    name: "GUETZLI",
    value: "guetzli",
  },
];

export default function () {
  let location = useLocation();
  let history = useHistory();
  let query = useQuery();

  function addAlg(value) {
    let _alg = query.get("algs") ? query.get("algs") : "";

    if (_alg.length > 0) _alg += "," + value;
    else _alg += value;

    return location.pathname + "?algs=" + _alg;
  }

  function removeAlg(value) {
    let _alg = query.get("algs") ? query.get("algs") : "";
    if (_alg.indexOf("," + value) >= 0) _alg = _alg.replace("," + value, "");
    else if (_alg.indexOf(value + ",") >= 0)
      _alg = _alg.replace(value + ",", "");
    else _alg = _alg.replace(value, "");
    return location.pathname + "?algs=" + _alg;
  }

  function clearAlgs() {
    return location.pathname + "?algs=";
  }

  return (
    <>
      <div>
        <Link to="/home" className="mx-2">
          <img src={LogoImg} height="30px" />
        </Link>
        <Button
          className="btn btn-white text-dark btn-sm m-1"
          onClick={() => history.goBack()}
        >
          <RiArrowLeftLine size={20} />
        </Button>
        <Link to="/home">
          <Button className="btn btn-white text-dark btn-sm m-1">
            <RiHome2Line size={20} />
          </Button>
        </Link>
      </div>

      <div>
        {algs_list.map((item, key) => {
          let opened = false;
          if (
            query.get("algs") &&
            query
              .get("algs")
              .split(",")
              .filter((e) => e == item.value).length > 0
          )
            opened = true;
          return (
            <div className="btn-group m-1" key={key}>
              <Link to={addAlg(item.value)}>
                <Button
                  className={
                    "btn btn-sm" +
                    (opened
                      ? " btn-primary text-white"
                      : " btn-white text-primary")
                  }
                  style={
                    opened
                      ? { borderEndEndRadius: 0, borderStartEndRadius: 0 }
                      : {}
                  }
                >
                  {item.name}
                </Button>
              </Link>
              {opened ? (
                <Link to={removeAlg(item.value)}>
                  <Button
                    className={"btn btn-sm btn-primary text-white"}
                    style={{
                      borderEndStartRadius: 0,
                      borderStartStartRadius: 0,
                    }}
                  >
                    <RiSubtractFill />
                  </Button>
                </Link>
              ) : null}
            </div>
          );
        })}

        <div className="btn-group m-1">
          <Link to={clearAlgs()}>
            <Button className={"btn btn-sm btn-primary text-white"}>
              <RiCloseLine />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
