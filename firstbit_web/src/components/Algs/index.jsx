import React from "react";
// Algs
import JPEG from "./JPEG";
import PNG from "./PNG";
import SVG from "./SVG";
import FLIF from "./FLIF";
import TIFF from "./TIFF";
import GIF from "./GIF";
import WEBP from "./WEBP";
import GUETZLI from "./GUETZLI";

export default function (props) {
  switch (props.type) {
    case "jpeg":
      return <JPEG {...props} />;
    case "png":
      return <PNG {...props} />;
    case "svg":
      return <SVG {...props} />;
    case "flif":
      return <FLIF {...props} />;
    case "tiff":
      return <TIFF {...props} />;
    case "gif":
      return <GIF {...props} />;
    case "webp":
      return <WEBP {...props} />;
    case "guetzli":
      return <GUETZLI {...props} />;
    default:
      return (
        <div className="alet alert-danger text-center p-3 h-100 rounded d-flex align-items-center justify-content-center">
          Algoritma Bulunamadi.
        </div>
      );
  }
}
