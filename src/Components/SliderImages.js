import React, { useState } from "react";
import image1 from "../image/1.jpeg";

import image4 from "../image/4.jpeg";
import image9 from "../image/9.jpg";
import image6 from "../image/6.png";
import image7 from "../image/7.jpeg";
import image10 from "../image/10.jpg";
import "../App.css";
import rose from "../image/wired-lineal-1845-rose.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function SliderImages(props) {
  const [slides, setSlides] = useState(0);

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
  ];

  // const data = [
  //   {
  //     caption: "Hello testing",
  //     image:
  //       "https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees-1028x579.png",
  //   },
  //   {
  //     caption: "Hello testing",
  //     image:
  //       "https://res.cloudinary.com/uktv/image/upload/v1375346157/uvqqzh20rqargzgyuqzv.jpg",
  //   },
  //   {
  //     caption: "Hello testing",
  //     image:
  //       "https://nckri.org/wp-content/uploads/2021/02/son-doonng-cave-vietnam-biggest-cave-1-1600x900.jpg",
  //   },
  // ];

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
          <img src={rose} alt="rose" className="gif rose" />
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
    </div>
  );
}

export default SliderImages;
