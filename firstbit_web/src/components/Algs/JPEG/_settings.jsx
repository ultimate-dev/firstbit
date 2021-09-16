import React from "react";
import { Slider, Radio, Select, Switch, Input } from "antd";
export const defaultSettings = {
  type: "sharp",
  format: "jpeg",
  progressive: false,
  lossy: true,
  quality: 80,
  subsampling: "4:2:0",
  quantization: 0,
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
          <div className="mb-3 d-flex justify-content-between">
            <small>Alt Örnekleme</small>
            <Select
              size="small"
              style={{ width: 100 }}
              value={settings.subsampling}
              onChange={(e) => setSettings({ ...settings, subsampling: e })}
            >
              <Select.Option value="4:2:0">4:2:0</Select.Option>
              <Select.Option value="4:4:4">4:4:4</Select.Option>
            </Select>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <small>Nicemleme</small>
            <Select
              size="small"
              style={{ width: 140 }}
              value={settings.quantization}
              onChange={(e) => setSettings({ ...settings, quantization: e })}
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
            </Select>
          </div>
        </>
      ) : settings.lossy ? (
        <div className="mb-3 d-flex justify-content-between">
          <small>Nicemleme</small>
          <Select
            size="small"
            style={{ width: 140 }}
            value={settings.quantization}
            onChange={(e) => setSettings({ ...settings, quantization: e })}
          >
            <Select.Option value="0">JPEG Annex K</Select.Option>
            <Select.Option value="1">Flat</Select.Option>
            <Select.Option value="2">Custom, tuned for MS-SSIM</Select.Option>
            <Select.Option value="3">
              ImageMagick table by N. Robidoux
            </Select.Option>
            <Select.Option value="4">Custom, tuned for PSNR-HVS</Select.Option>
            <Select.Option value="5">
              Table from paper by Klein, Silverstein and Carney
            </Select.Option>
          </Select>
        </div>
      ) : null}
    </div>
  );
}
