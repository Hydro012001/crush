import React, { useEffect, useState } from "react";
import image1 from "../image/1.jpeg";

import image4 from "../image/4.jpeg";
import image9 from "../image/9.jpg";
import image6 from "../image/6.png";
import image7 from "../image/7.jpeg";
import image10 from "../image/10.jpg";
import gifts from "../image/gifts.gif";
import "../App.css";
import rose from "../image/wired-lineal-1845-rose.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ToastMsg from "./ToastMsg";

function SliderImages(props) {
  const [slides, setSlides] = useState(0);
  const [showToast, setShowToast] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setShowToast(false);
    }, 2000);
  }, []);
  const data = [
    {
      caption: "Hello testing",
      image: image1,
    },

    {
      caption: "Hello testing",
      image: image4,
    },

    {
      caption: "Hello testing",
      image: image6,
    },
    {
      caption: "Hello testing",
      image: image7,
    },
    {
      caption: "Hello testing",
      image: image9,
    },
    {
      caption: "Hello testing",
      image: image10,
    },
    {
      caption: "Hello testing",
      image: gifts,
    },
  ];

  const handleNextSlide = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1);
  };
  const handlePrevSlide = () => {
    setSlides(slides === 0 ? data.length - 1 : slides - 1);
  };

  return (
    <div className="contianer-slider">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="arrow arrow-left"
        size="2xl"
        onClick={handlePrevSlide}
      />
      {data.map((item, index) => (
        <div
          key={index}
          className={slides === index ? "slides" : "slides-hidden"}
        >
          <img src={item.image} alt="sample" className="images" />
          <div className="rose-continer">
            <img src={rose} alt="rose" className="gif rose" />
            <img src={rose} alt="rose" className="gif rose" />
            <img src={rose} alt="rose" className="gif rose" />
            <img src={rose} alt="rose" className="gif rose" />
            <img src={rose} alt="rose" className="gif rose" />
            <img src={rose} alt="rose" className="gif rose" />
            <img src={rose} alt="rose" className="gif rose" />
          </div>
          {index === data.length - 1 ? (
            <button
              className="reveal-gift"
              onClick={() => {
                navigate("/letter");
              }}
            >
              {" "}
              Click Me To Reveal Your Gift
            </button>
          ) : (
            ""
          )}
        </div>
      ))}

      <FontAwesomeIcon
        icon={faChevronRight}
        className="arrow arrow-right"
        size="2xl"
        onClick={handleNextSlide}
      />
      <span className={`indecators`}>
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlides(index)}
            className={`indecator ${slides === index ? "active" : "inactive"}`}
          ></button>
        ))}
      </span>
      {showToast ? <ToastMsg message={"Please view the each image"} /> : ""}
    </div>
  );
}

export default SliderImages;
