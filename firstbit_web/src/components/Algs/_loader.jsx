import React from "react";
import { Skeleton, Button } from "antd";

export default function ({ onCancel }) {
  return (
    <React.Fragment>
      <div className="loading">
        <Skeleton.Button active className="skeleton" />
        <Button className="btn btn-soft-danger" onClick={onCancel}>
          İptal
        </Button>
      </div>
    </React.Fragment>
  );
}
