import React from "react";
import { Slider, Radio, Select, Switch, Input } from "antd";
export const defaultSettings = {
  type: "imagemin",
  format: "gif",
  lossy: 80,
  colors: 256,
  optimize: 1,
  unoptimize: false,
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
          <Select.Option value="webp">.gif</Select.Option>
        </Select>
      </div>

      <div className="mb-3">
        <small>Kayıp</small>
        <Slider
          value={settings.lossy}
          max={100}
          min={0}
          onChange={(e) => setSettings({ ...settings, lossy: e })}
        />
      </div>

      <div className="mb-3">
        <small>Renkler</small>
        <Slider
          value={settings.colors}
          max={256}
          min={2}
          onChange={(e) => setSettings({ ...settings, colors: e })}
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <small>Optimizine/Unoptimize</small>
        <Switch
          defaultChecked={settings.unoptimize}
          onChange={(e) => {
            setSettings({
              ...settings,
              unoptimize: e,
            });
          }}
        />
      </div>
      {!settings.unoptimize ? (
        <div className="mb-3">
          <small>Optimize</small>
          <Slider
            value={settings.optimize}
            max={3}
            min={1}
            onChange={(e) => setSettings({ ...settings, optimize: e })}
          />
        </div>
      ) : null}
    </div>
  );
}
