import React, { useState } from "react";
import "./Envelope.css"; // Import your CSS file
import rose from "../image/back.jpg";
import MyResponse from "./MyResponse";
function EnvelopeMsg() {
  const [isFlapOpen, setFlapOpen] = useState(false);
  const [agree, setAgree] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [showNote, setShowNote] = useState(true);
  const toggleFlap = () => {
    setShowNote(!showNote);
    setFlapOpen(!isFlapOpen);
  };
  const handleShowResponse = (agree) => {
    setAgree(agree);
    handleClose();
  };
  const handleClose = () => {
    setShowResponse(!showResponse);
  };
  return (
    <>
      {showResponse ? (
        <MyResponse agree={agree} handleClose={handleClose} />
      ) : (
        ""
      )}
      <div className="body-envelope">
        {showNote ? (
          <div className="instruction">
            <h2>Click the heart icon to reveal the gift</h2>
          </div>
        ) : (
          ""
        )}
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
                      <strong> Happy New Year</strong>, I pray that this year
                      will be your years of fulfilment. I hope you will achieve
                      you dreams in life. And I hope that one day u be
                      comfortable to share your problems with anyone or to me
                      lang. I hope this year and coming years I would be glad
                      nga mahi-apil ko. I want you to know that seryoso ko nimo
                      and unta dili ka mapul-an kay usahay ky boring kay ko
                      katabi. I hope one day we can be official. But before na
                      mahitabo dapat graduate nata. I hope that dili ka mangita
                      ug lain, but naa man gani sultie lang ko daan haha. Pili
                      lang sa ubos if you choose other or not.
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
