import React from "react";
import { Slider, Radio, Select, Switch, Input } from "antd";
export const defaultSettings = {
  type: "sharp",
  format: "tiff",
  quality: 80,
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
          <Radio.Button value="sharp">Sharp</Radio.Button>
        </Radio.Group>
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
        </Select>
      </div>

      <div className="mb-3">
        <small>Kalite</small>
        <Slider
          value={settings.quality}
          max={100}
          min={1}
          onChange={(e) => setSettings({ ...settings, quality: e })}
        />
      </div>
    </div>
  );
}
