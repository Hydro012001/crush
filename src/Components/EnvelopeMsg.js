import React, { useState } from "react";
import "./Envelope.css"; // Import your CSS file
import rose from "../image/back.jpg";
import MyResponse from "./MyResponse";
function EnvelopeMsg() {
  const [isFlapOpen, setFlapOpen] = useState(false);
  const [agree, setAgree] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const toggleFlap = () => {
    setFlapOpen(!isFlapOpen);
  };
  const handleShowResponse = (agree) => {
    setShowResponse(!showResponse);
    setAgree(agree);
  };
  return (
    <>
      {showResponse ? <MyResponse agree={agree} /> : ""}
      <div className="body-envelope">
        <div className={`container `}>
          <div className={`envelope-wrapper ${isFlapOpen ? "flap" : ""}`}>
            <div className={`envelope`}>
              <div className="letter">
                <div className="text">
                  <div className="header">
                    <strong>Dear Rose Marie Goc-ong, </strong>
                    <img src={rose} alt="rose" className="picture" />
                  </div>
                  <>
                    <p>
                      Happy New Year, I pray that this year will be your years
                      of fulfilment. I hope you will achieve you dreams in life.
                      I hope that you will not choose other, but naa man sultie
                      lang ko daan haha. Pili lang sa ubos if you choose other
                      or not. And I hope that one day u be comfortable to share
                      your problems with anyone or to me lang.
                    </p>
                    <div className="btn-containers">
                      <button
                        className="btns other"
                        onClick={() => handleShowResponse("Not Agree")}
                      >
                        I will choose other
                      </button>
                      <button
                        className="btns only"
                        onClick={() => handleShowResponse("Agree")}
                      >
                        I will choose you
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </div>

            <div className="heart" onClick={toggleFlap}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnvelopeMsg;
