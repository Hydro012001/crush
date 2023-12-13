import React from "react";

function Feedback({ handleShowMessage }) {
  return (
    <div className="message">
      <h2>Hi Crush,</h2>
      <p>I want to show this simple cube picture for you.</p>
      <p>I never thought nga maka tell ko nmo sa akong feelings.</p>
      <p>And I never expect usab nga naa pd diay kay crush naku.</p>
      <p>Thank you so much.</p>
      <p>Keep being pretty. </p>
      <p>You're admirer.</p>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => handleShowMessage()}
      >
        Close
      </button>
    </div>
  );
}

export default Feedback;
