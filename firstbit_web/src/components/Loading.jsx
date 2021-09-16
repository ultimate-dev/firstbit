import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

export function LoadingRedux() {
  let loading = useSelector((state) => state.loadingReducer.loading);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) setProgress(99);
    else setProgress(0);
  }, [loading]);

  if (loading) {
    return (
      <LoadingBar
        color="#5386e4"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
    );
  } else {
    return null;
  }
}

export function LoadingFallback() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(99);
  }, []);
  return (
    <LoadingBar
      color="#5386e4"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      height={3}
    />
  );
}
