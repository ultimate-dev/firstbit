import React from "react";
import { Slider, Radio, Select, Switch, Input } from "antd";
export const defaultSettings = {
  type: "node-flif",
  format: "flif",
  effort: 50,
  quality: 50,
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
          <Radio.Button value="node-flif">Node Flif</Radio.Button>
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
          <Select.Option value="flif">.flif</Select.Option>
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

      <div className="mb-3">
        <small>Efor</small>
        <Slider
          value={settings.effort}
          max={100}
          min={1}
          onChange={(e) => setSettings({ ...settings, effort: e })}
        />
      </div>
    </div>
  );
}
