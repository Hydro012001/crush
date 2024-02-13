import React, { useRef, useState } from "react";
import "./Valentines.css";
import image1 from "../image/1.jpeg";
import image2 from "../image/2.jpeg";
import leftImage from "../image/left.jpg";
import topImage from "../image/top.jpg";
import rightImage from "../image/right.jpg";
import backImage from "../image/back.jpg";
import firstVideo from "../image/firstVideo.mp4";
import playvideo from "../image/videopicture.jpg";
function Valentines(props) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef();

  const handleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="val-container">
      <div className="picture-container">
        <img className="picture-img" src={image1} alt="Rose" />
      </div>
      <div className="picture-container">
        <img className="picture-img" src={image2} alt="Rose" />
      </div>
      <div className="picture-container">
        <img className="picture-img" src={leftImage} alt="Rose" />
      </div>
      <div className="picture-container">
        <img className="picture-img" src={topImage} alt="Rose" />
      </div>
      <div className="picture-container">
        <img className="picture-img" src={rightImage} alt="Rose" />
      </div>
      <div className="picture-container">
        <img className="picture-img" src={backImage} alt="Rose" />
      </div>
      <div className="val-letter">
        <div className="picture-play " onClick={handleShowVideo}>
          <img className="picture-img" src={playvideo} alt="Rose" />
          <div className="play-btns">
            <span>&#9198;</span>
            <span>&#9208;</span>
            <span>&#9197;</span>
          </div>
        </div>
        <h1>
          Hi Rose, Happy Valentines Day. Continue to pursue your dream. I will
          always here waiting and choosing because your worth to be pursue. Take
          care always. (✿◡w◡).
          <span style={{ fontSize: "40px" }}>&#128525;</span>
        </h1>
      </div>
      <div className="cortain-left"></div>
      <div className="cortain-right"></div>
      <div className="rose1">
        <div className="flower">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
        <div className="leaf">
          <div className="stem"></div>
          <div className="leafs"></div>
          <div className="leafs"></div>
        </div>
      </div>
      <div className="rose">
        <div className="flower">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
        <div className="leaf">
          <div className="stem"></div>
          <div className="leafs"></div>
          <div className="leafs"></div>
        </div>
      </div>
      {showVideo ? (
        <div className="video-container" onClick={handleShowVideo}>
          <div className="video-con" onClick={handleVideoClick}>
            <video width="640" height="360" controls ref={videoRef}>
              <source src={firstVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Valentines;
