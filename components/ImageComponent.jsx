import React from "react";
import Script from "next/script";
import { Scene } from "aframe-react";

export const Image = ({ url }) => {
  return (
    <div className="w-full h-screen bg-black">
      <Script
        src={
          "https://cdn.jsdelivr.net/gh/aframevr/aframe@5039f97613b38016298304cb496f7667bdef1c83/dist/aframe-master.min.js"
        }
        strategy="afterInteractive"
      />

      <Scene>
        <a-scene vr-mode-ui="enabled: true">
          <a-sky src={url} rotation="0 -130 0"/>
        </a-scene>
      </Scene>
    </div>
  );
};

export default Image;
