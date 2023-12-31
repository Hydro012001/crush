import React from "react";
import "../App.css";
import { useEffect, useState } from "react";

import MyGif from "../image/wired-lineal-20-love-heart.gif";

import MyGift from "../image/wired-lineal-412-gift.gif";
import ToastMsg from "./ToastMsg";
import Feedback from "./Feedback";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [showToast, setShowToast] = useState(true);
  const [showMessae, setShowMessage] = useState(false);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();

    const mouseX = clientX - left;
    const mouseY = clientY - top;

    const rotateX = (mouseY / height - 0.5) * 360;
    const rotateY = (mouseX / width - 0.5) * 360;

    setRotation({ x: rotateX, y: rotateY });
  };

  useEffect(() => {
    setInterval(() => {
      setShowToast(false);
    }, 2000);
  }, []);

  const handleShowFeedback = () => {
    console.log(rotation);
    if (rotation.x === 0 && rotation.y === 0) {
      alert("Please hover first the images.");
    } else {
      handleShowMessage();
    }
  };

  const handleShowMessage = () => {
    setShowMessage(!showMessae);
  };
  return (
    <div className="contianer">
      {showMessae ? <Feedback handleShowMessage={handleShowMessage} /> : ""}
      <div className="App">
        {showToast ? (
          <ToastMsg />
        ) : (
          <div className="gif-contianer">
            <img
              src={MyGift}
              className="gif"
              onClick={() => {
                navigate("slider");
              }}
              alt="..."
            />
            <img
              src={MyGif}
              className="gif"
              onClick={handleShowFeedback}
              alt="..."
            />{" "}
          </div>
        )}
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          onMouseMove={handleMouseMove}
        >
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
