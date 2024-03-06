import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
function Welcome(props) {
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const handleLogin = () => {
    if (secretKey === "sunshine" || secretKey === "midnight rain") {
      localStorage.setItem("auth", true);
      localStorage.setItem("user", secretKey);
      navigate("/crush/home");
    } else {
      alert("Your secret key is invalid");
    }
  };
  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="welcome">
      <div className="form-welcome">
        <h1>Explore Our Path Together</h1>
        <div>
          <div className="inputtext">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter the secret key"
              id="text"
              onChange={(e) => setSecretKey(e.target.value)}
            />{" "}
          </div>

          <div className="checkbox-contianer">
            <div class="checkbox-wrapper-37">
              <input
                type="checkbox"
                name="checkbox"
                id="terms-checkbox-37"
                onClick={handleShowPassword}
              />
              <label for="terms-checkbox-37" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">Show Secret Key</span>
              </label>
            </div>
          </div>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Welcome;
