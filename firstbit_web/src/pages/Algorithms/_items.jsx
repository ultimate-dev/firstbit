import React, { useState } from "react";
import { useEffect } from "react";
import { Skeleton } from "antd";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ({
  images = [],
  setSelect = () => {},
  deleteImage = () => {},
  select = 0,
}) {
  let [loading, setLoading] = useState(false);

  return (
    <>
      {images
        ? images.map((item, key) => (
            <div className="app-algs-item animate__animated animate__fadeInLeft" key={key}>
              <div
                className="app-algs-item-body"
                onClick={() => setSelect(key)}
              >
            
                {loading ? (
                  <Skeleton.Button loading={true} active className="loading" />
                ) : (
                  <img
                    draggable="false"
                    className={select == key ? "active" : ""}
                  
                    src={item.src}
                  />
                )}
              </div>
            </div>
          ))
        : null}
    </>
  );
}
