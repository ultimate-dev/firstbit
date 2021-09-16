import React from "react";

export default function Infos({ output, width, file }) {
  return (
    <div className="app-algs-box-info">
      <small className="text-info">
        (
        {output.width ? (
          <>
            {output.width + "x" + output.height}
            <small className="ms-1 me-1 text-warning">
              {Number((output.width * 100) / width - 100).toFixed(2)}%
            </small>
            {" - "}
          </>
        ) : null}
        {Number(output.size / 1024 / 1024).toFixed(2) + " MB"})
        <small className="text-success ms-1">
          {Number((output.size * 100) / file.size - 100).toFixed(2)}%
        </small>
      </small>
    </div>
  );
}
