import React, { useRef } from "react";
import "./VideoPlayer.css";
import Video from "../../assests/hello.mov";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef();
  const closeVideo = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video-palyer ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closeVideo}
    >
      <video src={Video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
