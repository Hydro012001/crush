import React, { useState } from "react";
import "../App.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./Firebase";
function MyResponse({ agree }) {
  const [response, setResponse] = useState("");

  const handleSubmitResponse = async () => {
    console.log(agree);
    try {
      await addDoc(collection(db, "response"), {
        message: response,
        agree: agree,
      }).then((res) => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
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
        <button className="btns only" onClick={handleSubmitResponse}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default MyResponse;
