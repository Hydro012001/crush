import React from "react";

function Feedback({ handleShowMessage }) {
  return (
    <div className="message">
      <h2>Hi Crush,</h2>
      <p>
        I want to show this simple cube picture for you. I never thought nga
        maka tell ko nmo sa akong feelings. And I never expect usab nga naa pd
        diay kay crush naku. Thank you so much. Keep being pretty. You're
        admirer.
      </p>

      <button type="button" class="btnShow" onClick={() => handleShowMessage()}>
        Close
      </button>
    </div>
  );
}

export default Feedback;
