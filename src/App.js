import "./App.css";
import { useEffect, useState } from "react";
import ToastMsg from "./Components/ToastMsg";
import MyGif from "./image/wired-lineal-20-love-heart.gif";

function App() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [showToast, setShowToast] = useState(true);

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
    }, 5000);
  }, []);

  const handleShowFeedback = () => {
    console.log(rotation);
    if (rotation.x === 0 && rotation.y === 0) {
      alert("Please hover first the images.");
    } else {
    }
  };
  return (
    <div className="contianer">
      <div className="App">
        {" "}
        {showToast ? (
          <ToastMsg />
        ) : (
          <img
            src={MyGif}
            className="gif"
            onClick={handleShowFeedback}
            alt="..."
          />
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

export default App;
