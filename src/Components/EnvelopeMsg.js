import React, { useEffect, useState } from "react";
import "./Envelope.css"; // Import your CSS file
import rose from "../image/back.jpg";
import MyResponse from "./MyResponse";
import smile from "../image/wired-lineal-261-emoji-smile.gif";
import sad from "../image/icons8-sad (1).gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";
function EnvelopeMsg() {
  const [isFlapOpen, setFlapOpen] = useState(false);
  const [agree, setAgree] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [showNote, setShowNote] = useState(true);
  const [emojeType, setEmojeType] = useState("");
  const [addZindex, setAddZindex] = useState(false);
  const [response, setResponse] = useState([]);
  const toggleFlap = () => {
    setShowNote(!showNote);
    setFlapOpen(!isFlapOpen);
    setAddZindex(!addZindex);
  };
  const handleShowResponse = (agree) => {
    setAgree(agree);
    handleClose();
  };
  const handleClose = () => {
    setShowResponse(!showResponse);
  };

  const hanldeMouseEnter = (text) => {
    setEmojeType(text);
  };

  useEffect(() => {
    async function ResponseData() {
      const querySnap = await getDocs(collection(db, "response"));
      const newData = querySnap.docs.map((docs) => docs.data());
      setResponse((prevResponse) => [...prevResponse, ...newData]);
    }

    ResponseData();
  }, []);
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
              <div
                className={`letter`}
                style={{ zIndex: `${addZindex ? "4" : "0"}` }}
              >
                <div className="text">
                  <div className="header">
                    <strong>Dear Rose Marie Goc-ong, </strong>
                    <img src={rose} alt="rose" className="picture" />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="close"
                      onClick={toggleFlap}
                    />
                  </div>

                  <>
                    <p>
                      <strong> Happy New Year</strong>, I pray that this year
                      will be your years of fulfilment. I hope you will achieve
                      your dreams in life. And I hope that one day u will be
                      comfortable to share your problems with anyone or to me
                      lang. I hope this year and coming years I would be glad
                      nga mahi-apil ko. I want you to know that seryoso ko nimo
                      and unta nga seryoso pd ka sa akoa and unta pd dili ka
                      mapul-an kay usahay ky boring kay ko katabi. I hope one
                      day we can be official. But before na mahitabo dapat
                      graduate nata. I hope that dili ka mangita ug lain, but
                      naa man gani sultie lang ko daan haha. If naa man gani
                      please allow me to break all the promise that I made. But
                      if wala I will make those promise come true with you.
                      That's all Rose thank you for being part of my 2023 bisan
                      bag-o pata nagka-close. I pray that on the years nga mo
                      agi is part lang gihapon ka sa akong kinabuhi.
                      <strong> THANK YOU SO MUCH</strong>.
                      <br />
                      <label className="choosebuttontext">
                        Kaning button sa ubos to know if you will choose me or
                        dili.
                      </label>
                    </p>
                    {response.length > 0 ? (
                      ""
                    ) : (
                      <div className="btn-containers">
                        <button
                          className="btns other"
                          onClick={() => handleShowResponse("Not Agree")}
                          onMouseEnter={() => hanldeMouseEnter("other")}
                        >
                          I will choose other
                        </button>
                        <button
                          className="btns only"
                          onClick={() => handleShowResponse("Agree")}
                          onMouseEnter={() => hanldeMouseEnter("you")}
                        >
                          I will choose you
                        </button>
                      </div>
                    )}
                  </>
                </div>
              </div>
              <div className="heart" onClick={toggleFlap}></div>
            </div>
          </div>
        </div>
        <div className="emojies">
          {emojeType === "you" ? (
            <img src={smile} alt="emojie" />
          ) : emojeType === "other" ? (
            <img src={sad} alt="emojie" />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default EnvelopeMsg;
