import React, { useState } from "react";
import "../App.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";
function MyResponse({ agree, handleClose }) {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const handleSubmitResponse = async () => {
    setShowLoader(true);
    try {
      await addDoc(collection(db, "response"), {
        message: response,
        agree: agree,
      }).then((res) => {
        navigate("/slider");
      });
      setShowLoader(false);
      alert(
        "I have accept you response. Thank you, Thank you bisan dugay siya nakuha and fail man gabie but I cannot dislike you. I still like bisan nahitabo to bisan na abtan pa ug karn. I hope dili ko bandage is imong life after you have healed and use it you will throw it. I hope so ug dili."
      );
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
        {showLoader ? (
          <p className="uploading">
            Your Response is Being Save..... <br />
            Please Be Patient....
          </p>
        ) : (
          <>
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
            <textarea
              class="form-control"
              placeholder="Leave a response here"
              id="floatingTextarea2"
              onChange={(e) => setResponse(e.target.value)}
            ></textarea>
            <div className="btns-container">
              {" "}
              <button className="btns only" onClick={handleSubmitResponse}>
                Submit
              </button>
              <button className="btns other" onClick={handleHide}>
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyResponse;
