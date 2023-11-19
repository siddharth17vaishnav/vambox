import React  from "react";
import { Scene } from "aframe-react";

export const StreamComponent = ({ url }) => {
  const videoEl = React.useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  React.useEffect(() => {
    {
      url && attemptPlay();
    }
  }, [url]);
  return (
    <div className="w-full h-screen bg-black">
      {url ? (
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
      ) : (
        <Scene>
          <a-scene vr-mode-ui="enabled: true">
            <a-sky id="360-image" rotation="0 -130 0" />
          </a-scene>
        </Scene>
      )}
    </div>
  );
};

export default StreamComponent;