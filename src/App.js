import "./App.scss";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import GradientSvg from "./GradientSvg";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const DDayDate = new Date(2022, 11, 26, 10, 00, 0, 0).getTime();
const MaxDays = 30 * 24 * 60 * 60 * 1000;
let timerId;

function App() {
  const [currentTime, setCurrentTime] = useState(
    DDayDate - new Date().getTime()
  );
  const getDays = () => {
    return parseInt(currentTime / (1000 * 60 * 60 * 24));
  };
  const getHours = () => {
    return parseInt((currentTime / (1000 * 60 * 60)) % 24);
  };
  const getMinutes = () => {
    return parseInt((currentTime / (1000 * 60)) % 60);
  };
  const getSeconds = () => {
    return parseInt((currentTime / 1000) % 60);
  };
  useEffect(() => {
    timerId = setInterval(() => {
      setCurrentTime(DDayDate - new Date().getTime());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const onReady = (e) => {
    e.target.mute();
    e.target.playVideo();
  };

  return (
    <div className="main">
      <div className="container">
        <div className="txt">Countdown</div>
        <div className="txt">To Phuket</div>
        <div className="img-box">
          <CircularProgressbarWithChildren
            value={currentTime}
            maxValue={MaxDays}
            strokeWidth={2}
            styles={buildStyles({
              pathColor: "url(#myGradient)",
              trailColor: "transparent",
            })}
          >
            <div className="div-round">
              <YouTube
                iframeClassName="iframe-round"
                videoId="zHyRtUISm7w"
                onReady={onReady}
                opts={{
                  playerVars: {
                    autoplay: 1,
                    frameborder: 0,
                    modestbranding: 0,
                    controls: 0,
                    loop: 1,
                    playsinline: 1,
                    iv_load_policy: 3,
                  },
                }}
              />
              {/* <iframe
                className="iframe-round"
                allow="autoplay; encrypted-media"
                src="https://www.youtube.com/embed/zHyRtUISm7w?autoplay=1&frameborder=0&modestbranding=1&controls=0&loop=1&playsinline=1&iv_load_policy=3&mute=1"
                title="phuket-video"
              ></iframe> */}
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className="timer">
          <div className="units">
            <div>{getDays()}</div>
            <div className="unit-name">days</div>
          </div>
          <div className="units">
            <div>{getHours()}</div>
            <div className="unit-name">hours</div>
          </div>
          <div className="units">
            <div>{getMinutes()}</div>
            <div className="unit-name">minutes</div>
          </div>
          <div className="units">
            <div>{getSeconds()}</div>
            <div className="unit-name">seconds</div>
          </div>
        </div>
      </div>
      <GradientSvg></GradientSvg>
    </div>
  );
}

export default App;
