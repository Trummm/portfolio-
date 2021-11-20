import React, { useRef, useState } from "react";
import "./soundBar.css";
import audio from "./../../assets/sound/sound.mp3";
import { PlayCircleFilled, PauseCircleFilled } from "@material-ui/icons";

function SoundBar(props) {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const handleClick2 = () => {
    setClick2(!click2);
  };
  return (
    <div className="Soundbar">
      <h2 className="title" style={{ color: `${props.theme}` }}>
        Play here
        <div className="Soundbar_circle" onClick={handleClick}>
          {click2 ? (
            <PauseCircleFilled className="title_icon" onClick={handleClick2} />
          ) : (
            <PlayCircleFilled className="title_icon" onClick={handleClick2} />
          )}
        </div>
      </h2>
      <span
        className="Soundbar__line"
        style={{
          animationPlayState: click ? "running" : "paused",
          background: `${props.color}`,
          borderColor: `${props.color}`,
        }}
      ></span>
      <span
        className="Soundbar__line"
        style={{
          animationPlayState: click ? "running" : "paused",
          background: `${props.color}`,
          borderColor: `${props.color}`,
        }}
      ></span>
      <span
        className="Soundbar__line"
        style={{
          animationPlayState: click ? "running" : "paused",
          background: `${props.color}`,
          borderColor: `${props.color}`,
        }}
      ></span>
      <span
        className="Soundbar__line"
        style={{
          animationPlayState: click ? "running" : "paused",
          background: `${props.color}`,
          borderColor: `${props.color}`,
        }}
      ></span>
      <span
        className="Soundbar__line"
        style={{
          animationPlayState: click ? "running" : "paused",
          background: `${props.color}`,
          borderColor: `${props.color}`,
        }}
      ></span>

      <audio src={audio} ref={ref} loop></audio>
    </div>
  );
}

export default SoundBar;
