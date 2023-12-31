import React, { useState } from "react";
import "../App.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";
function MyResponse({ agree, handleClose }) {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const handleSubmitResponse = async () => {
    try {
      await addDoc(collection(db, "response"), {
        message: response,
        agree: agree,
      }).then((res) => {
        navigate("/slider");
      });
      alert("I have accept you response. Thank you");
      navigate("/slider");
    } catch (error) {
      console.log(error);
    }
  };
  const handleHide = () => {
    handleClose();
  };

  return (
    <div className="container-response">
      <div className="response-container">
        <p className="notes">
          Can you give me your honest response? <br />
          Why did you choose{" "}
          {agree === "Agree" ? (
            <label className="agree-ans">
              {" "}
              me instead of choosing the others ?
            </label>
          ) : (
            <label className="not-ans">not choose me ?</label>
          )}
        </p>
        <div class="form-floating ">
          <textarea
            class="form-control"
            placeholder="Leave a response here"
            id="floatingTextarea2"
            style={{ height: "100px", width: "30rem" }}
            onChange={(e) => setResponse(e.target.value)}
          ></textarea>
        </div>
        <div className="btns-container">
          {" "}
          <button className="btns only" onClick={handleSubmitResponse}>
            Submit
          </button>
          <button className="btns other" onClick={handleHide}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyResponse;
