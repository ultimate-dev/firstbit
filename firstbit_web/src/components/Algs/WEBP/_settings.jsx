import React from "react";
import { Slider, Radio, Select, Switch, Input } from "antd";
export const defaultSettings = {
  type: "sharp",
  format: "webp",
  lossy: true,
  quality: 80,
  alphaQuality: 100,
  effort: 4,
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
          <Select.Option value="tiff">.tiff</Select.Option>
        </Select>
      </div>
      <div className="mb-3 d-flex justify-content-between">
        <small>Kayıplı/Kayıpsız</small>
        <Switch
          defaultChecked={!settings.lossy}
          onChange={(e) => {
            setSettings({
              ...settings,
              lossy: !e,
            });
          }}
        />
      </div>

      {settings.lossy ? (
        <>
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
            <small>Alfa Kalite</small>
            <Slider
              value={settings.alphaQuality}
              max={100}
              min={1}
              onChange={(e) => setSettings({ ...settings, alphaQuality: e })}
            />
          </div>
          <div className="mb-3">
            <small>Efor</small>
            <Slider
              value={settings.effort}
              max={6}
              min={0}
              onChange={(e) => setSettings({ ...settings, effort: e })}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
