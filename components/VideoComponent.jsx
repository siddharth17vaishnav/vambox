import React from "react";
import Script from "next/script";
import { Scene } from "aframe-react";
import { useEffect, useRef } from "react";

export const VideoComponent = ({ url }) => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

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
          <a-assets timeout="10000">
            <video
              id="videoBunny"
              preload="auto"
              src={url}
              crossOrigin="anonymous"
              controls
              muted={false}
              ref={videoEl}
            ></video>
          </a-assets>

          <a-videosphere src="#videoBunny"></a-videosphere>
        </a-scene>
      </Scene>
    </div>
  );
};

export default VideoComponent;
