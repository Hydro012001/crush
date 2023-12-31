import React, { useState } from "react";
import "../App.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";
function MyResponse({ agree, handleClose }) {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const handleSubmitResponse = async () => {
    console.log(agree);
    try {
      await addDoc(collection(db, "response"), {
        message: response,
        agree: agree,
      }).then((res) => {
        handleHide();
      });
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
        <div class="form-floating ">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
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
