import React from "react";
import { Link } from "react-router-dom";
import {
  RiSettings3Fill,
  RiCloseLine,
  RiFullscreenFill,
  RiDownload2Fill,
} from "react-icons/ri";

export default function ({
  head,
  src,
  openModal,
  openSettings,
  closeAlg,
  error,
}) {
  return (
    <div className="app-algs-box-title">
      <div className="app-algs-box-head">{head}</div>
      <div>
        {!error ? (
          <>
            <a href={src} download>
              <RiDownload2Fill size={20} />
            </a>

            <button onClick={() => openModal(src)}>
              <RiFullscreenFill size={20} />
            </button>
            <button onClick={() => openSettings()}>
              <RiSettings3Fill size={20} />
            </button>
          </>
        ) : null}
        <Link to={closeAlg()}>
          <button className="text-danger">
            <RiCloseLine size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
}
