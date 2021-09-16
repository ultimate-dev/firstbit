import React from "react";
import { Slider, Radio, Select, Switch, Input } from "antd";
export const defaultSettings = {
  type: "sharp",
  format: "png",
  progressive: false,
  lossy: true,
  quality: 80,
  level: 6,
  speed: 4,
  optimize: 3,
};

export default function ({ settings = defaultSettings, setSettings }) {
  console.log(settings.info);
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
      <div className="mb-3 d-flex justify-content-between">
        <small>Aşamasız/Aşamalı</small>
        <Switch
          defaultChecked={!settings.progressive}
          onChange={(e) => {
            setSettings({
              ...settings,
              progressive: !e,
            });
          }}
        />
      </div>

      {settings.lossy ? (
        <div className="mb-3">
          <small>Kalite</small>
          <Slider
            value={settings.quality}
            max={100}
            min={1}
            onChange={(e) => setSettings({ ...settings, quality: e })}
          />
        </div>
      ) : null}
      {settings.type == "sharp" ? (
        <>
          <div className="mb-3">
            <small>Zlib Sıkıştırma Düzeyi</small>
            <Slider
              value={settings.level}
              max={9}
              min={0}
              onChange={(e) => setSettings({ ...settings, level: e })}
            />
          </div>
        </>
      ) : settings.lossy ? (
        <div className="mb-3 d-flex justify-content-between">
          <small>Hız</small>
          <Select
            size="small"
            style={{ width: 140 }}
            value={settings.speed}
            onChange={(e) => setSettings({ ...settings, speed: e })}
          >
            <Select.Option value="0">0</Select.Option>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="5">5</Select.Option>
            <Select.Option value="6">6</Select.Option>
            <Select.Option value="7">7</Select.Option>
            <Select.Option value="8">8</Select.Option>
            <Select.Option value="9">9</Select.Option>
            <Select.Option value="9">10</Select.Option>
            <Select.Option value="11">11</Select.Option>
          </Select>
        </div>
      ) : (
        <div className="mb-3 d-flex justify-content-between">
          <small>Optimizasyon Düzeyi</small>
          <Select
            size="small"
            style={{ width: 140 }}
            value={settings.optimize}
            onChange={(e) => setSettings({ ...settings, optimize: e })}
          >
            <Select.Option value="0">0</Select.Option>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="5">5</Select.Option>
            <Select.Option value="6">6</Select.Option>
            <Select.Option value="7">7</Select.Option>
          </Select>
        </div>
      )}
    </div>
  );
}
