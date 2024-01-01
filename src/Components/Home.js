import React from "react";
import "../App.css";
import { useEffect, useState } from "react";

import MyGif from "../image/wired-lineal-20-love-heart.gif";

import MyGift from "../image/wired-lineal-412-gift.gif";
import ToastMsg from "./ToastMsg";
import Feedback from "./Feedback";
import { useNavigate } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./Firebase";
function Home(props) {
  const navigate = useNavigate();
  //  const [response, setResponse] = useState([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [showToast, setShowToast] = useState(true);
  const [showMessae, setShowMessage] = useState(false);

  // useEffect(() => {
  //   async function ResponseData() {
  //     const querySnap = await getDocs(collection(db, "response"));
  //     const newData = querySnap.docs.map((docs) => docs.data());
  //     setResponse((prevResponse) => [...prevResponse, ...newData]);
  //   }

  //   ResponseData();
  // }, []);

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

  const handleGoToSlider = () => {
    // const currentDate = new Date();
    // const newYearDate = new Date("January 1, 2024");
    // const endDate = new Date("January 2, 2024");
    // if (
    //   currentDate.getTime() >= newYearDate.getTime() &&
    //   currentDate.getTime() <= endDate.getTime()
    // ) {
    //   navigate("slider");
    // } else if (currentDate.getTime() >= endDate.getTime()) {
    //   if (response.length > 0) {
    //     navigate("slider");
    //   } else {
    //     alert(
    //       "Sorry to inform that you can no longer access this page. You have failed to open on January 1, 2024"
    //     );
    //   }

    // }
    navigate("slider");
  };
  return (
    <div className="contianer">
      {showMessae ? <Feedback handleShowMessage={handleShowMessage} /> : ""}
      <div className="App">
        {showToast ? (
          <ToastMsg message={"Please Hover Over the Images"} />
        ) : (
          <div className="gif-contianer">
            <img
              src={MyGift}
              className="gif"
              onClick={() => {
                handleGoToSlider();
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
