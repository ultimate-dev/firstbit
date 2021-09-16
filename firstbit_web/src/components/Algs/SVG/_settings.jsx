import React from "react";
import { Slider, Radio, Select, Switch, Input } from "antd";
export const defaultSettings = {
  type: "imagemin",
  format: "svg+xml",
};

export default function ({ settings = defaultSettings, setSettings }) {
  return (
    <div className="app-algs-box-settings mt-3 animate__animated animate__bounceIn">
      <div className="mb-3 d-flex justify-content-between">
        <small>Sıkıştırma Sistemi</small>
        <Radio.Group
          size="small"
          defaultValue={settings.type}
          onChange={(e) => setSettings({ ...settings, type: e.target.value })}
        >
          <Radio.Button value="imagemin">Imagemin</Radio.Button>
        </Radio.Group>
      </div>
      <div className="mb-3">
        <small>Yeniden Boyutlandirma</small>
        <div className="pl-2 w-100 mt-2">
          <small className="text-muted d-inline-block col-3">width</small>
          <Input
            type="number"
            size="small"
            style={{ width: 100 }}
            value={settings.info ? settings.info.width : 0}
            onChange={(e) => {
              setSettings({
                ...settings,
                info: { ...settings.info, width: e.target.value },
              });
            }}
            min={1}
          />
        </div>
        <div className="pl-2 w-100">
          <small className="text-muted d-inline-block col-3">height:</small>
          <Input
            type="number"
            size="small"
            style={{ width: 100 }}
            value={settings.info ? settings.info.height : 0}
            onChange={(e) => {
              setSettings({
                ...settings,
                info: { ...settings.info, height: e.target.value },
              });
            }}
            min={1}
          />
        </div>
      </div>
      <div className="mb-3 d-flex justify-content-between">
        <small>Cikti Turu</small>
        <Select
          size="small"
          style={{ width: 100 }}
          defaultValue={settings.format}
          onChange={(e) =>
            setSettings({
              ...settings,
              format: e,
            })
          }
        >
          <Select.Option value="jpeg">.jpeg</Select.Option>
          <Select.Option value="png">.png</Select.Option>
          <Select.Option value="webp">.webp</Select.Option>
          <Select.Option value="svg+xml">.svg</Select.Option>
        </Select>
      </div>
    </div>
  );
}
