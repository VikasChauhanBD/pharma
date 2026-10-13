import React, { useState } from "react";
import "./IntroVideo.css";

function IntroVideo({ onEnd }) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (typeof onEnd === "function") onEnd();
  };

  const handleEnded = () => {
    setVisible(false);
    if (typeof onEnd === "function") onEnd();
  };

  if (!visible) return null;

  return (
    <div className="intro-video-container">
      <button
        className="intro-video-close"
        onClick={handleClose}
        aria-label="Close intro video"
        title="Skip intro"
      >
        ×
      </button>

      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
      >
        <source
          src="https://cdn.dribbble.com/userupload/49280672/file/large-84b06a2eaa3a30a6839f66a2fd014fbe.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
