import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
function Welcome(props) {
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (secretKey === "sunshine" || secretKey === "midnight rain") {
      localStorage.setItem("auth", true);
      localStorage.setItem("user", secretKey);
      navigate("/crush/home");
    } else {
      alert("Your secret key is invalid");
    }
  };

  return (
    <div className="welcome">
      <div className="form-welcome">
        <h1>Explore Our Path Together</h1>
        <input
          type="password"
          placeholder="Enter the secret key"
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Welcome;
