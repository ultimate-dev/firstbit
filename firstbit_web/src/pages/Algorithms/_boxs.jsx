import React, { useState, useEffect } from "react";
import Algs from "../../components/Algs";
import { useQuery } from "../../hooks/use-query";
import { useLocation, Link } from "react-router-dom";
import { Lightbox } from "react-modal-image";
// Icons
import { RiDeleteBin5Line, RiFullscreenFill } from "react-icons/ri";

export default function ({ images = [], select = 0, deleteImage }) {
  let location = useLocation();
  let [openModal, setOpenModal] = useState();

  let query = useQuery();

  let [algs, setAlgs] = useState([]);

  useEffect(() => {
    let _algs = query.get("algs") ? query.get("algs").split(",") : [];
    setAlgs(_algs);
  }, [query.get("algs"), images]);

  function closeAlg(key) {
    let _algs = query.get("algs");
    _algs = algs
      .slice(0, key)
      .concat(algs.slice(key + 1))
      .join(",");
    return location.pathname + "?algs=" + _algs;
  }

  return (
    <>
      {openModal ? (
        <Lightbox
          medium={openModal}
          large={openModal}
          onClose={() => setOpenModal(false)}
        />
      ) : null}

      <div className="app-algs-box col-lg-4 col-md-6">
        <div className="app-algs-box-body animate__animated animate__rotateInDownLeft">
          <div className="app-algs-box-title">
            <div className="app-algs-box-head">Orjinal</div>
            <div>
              <div>
                <button onClick={() => setOpenModal(images[select].src)}>
                  <RiFullscreenFill size={20} />
                </button>
                <button
                  className="text-danger"
                  onClick={() => deleteImage(select)}
                >
                  <RiDeleteBin5Line size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="app-algs-box-info">
            <small className="text-info">
              (
              {images[select].width +
                "x" +
                images[select].height +
                " - " +
                Number(images[select].file.size / 1024 / 1024).toFixed(2) +
                " MB"}
              )
            </small>
          </div>
          <img
            src={images[select].src}
            onClick={() => setOpenModal(images[select].src)}
          />
        </div>
      </div>

      {algs
        ? algs.map((item, key) => (
            <div className="app-algs-box col-lg-4 col-md-6" key={key}>
              <div className="app-algs-box-body animate__animated animate__rotateInDownLeft">
                <Algs
                  openModal={(url) => setOpenModal(url)}
                  closeAlg={() => closeAlg(key)}
                  type={item}
                  {...images[select]}
                />
              </div>
            </div>
          ))
        : null}
    </>
  );
}
