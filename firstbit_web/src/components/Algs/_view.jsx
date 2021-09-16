import React from "react";

export default function ({ src, mimetype, onLoadStart, onClick, onLoad }) {
  console.log(mimetype);
  if (mimetype !== "image/flif" && mimetype !== "image/tiff"  && mimetype !== "image/svg+xml")
    return (
      <img
        src={src}
        width="100%"
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onClick={onClick}
      />
    );
  else
    return (
      <a className="btn btn-primary w-100" href={src} download>
        İndir ve Görüntüle
      </a>
    );
}
