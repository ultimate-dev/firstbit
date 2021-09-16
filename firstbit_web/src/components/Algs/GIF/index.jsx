import React, { useState, useEffect } from "react";
import Title from "../_title";
import Loader from "../_loader";
import View from "../_view";
import Infos from "../_infos";
import Settings, { defaultSettings } from "./_settings";
import compress from "../_compress";
// Helpers
import { cancel } from "../../../helpers/http.helper";

export default function Page(props) {
  const HEAD = "GIF";
  const NAME = "gif";

  let [load, setLoad] = useState(false);
  let [settingsVisible, setSettingsVisible] = useState(false);
  let [settings, setSettings] = useState(defaultSettings);
  let [output, setOutput] = useState();
  let [error, setError] = useState();

  async function compressSync() {
    setLoad(true);
    setError(null);
    setOutput(null);
    await compress(
      NAME,
      { ...props, settings },
      (_output) => {
        setOutput(_output);
      },
      (err) => {
        setError(err);
      }
    );
    setLoad(false);
  }

  useEffect(() => compressSync(), [props.file, settings]);

  return (
    <React.StrictMode>
      <div>
        <Title
          head={HEAD}
          {...props}
          src={output ? output.src : ""}
          openSettings={() => setSettingsVisible(!settingsVisible)}
          error={error}
        />
        {load || (!output && !error) ? (
          <Loader
            onCancel={() => {
              setOutput(null);
              setLoad(false);
              setError({ message: "İstek iptal edildi." });
              cancel();
            }}
          />
        ) : null}
        {output ? <Infos output={output} {...props} /> : null}
        {output ? (
          <View
            {...output}
            onLoad={() => setLoad(false)}
            onLoadStart={() => setLoad(true)}
            onClick={() => props.openModal(output.src)}
          />
        ) : null}
        {error ? (
          <div className="alert alert-danger">{error.message}</div>
        ) : null}
        {settingsVisible && !error ? (
          <Settings
            settings={{ info: output, ...settings }}
            setSettings={setSettings}
          />
        ) : null}
      </div>
    </React.StrictMode>
  );
}
