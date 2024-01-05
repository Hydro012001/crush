import React, { useEffect, useState } from "react";
import "./Home.css";
import ToastMsg from "./ToastMsg";
function Home(props) {
  const [showToast, setShowToast] = useState(true);
  const loginUser = localStorage.getItem("user");
  useEffect(() => {
    setInterval(() => {
      setShowToast(false);
    }, 5000);
  }, []);
  return (
    <div className="home-container">
      {showToast ? (
        <ToastMsg message={`Welcome ${loginUser} I hope you enjoy here. `} />
      ) : (
        ""
      )}
      <h1>Comming Soon...</h1>
    </div>
  );
}

export default Home;
