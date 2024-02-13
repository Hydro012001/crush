import React from "react";
import "./Home.css";
// import ToastMsg from "./ToastMsg";
function Home(props) {
  // const [showToast, setShowToast] = useState(true);
  // const loginUser = localStorage.getItem("user");
  // useEffect(() => {
  //   setInterval(() => {
  //     setShowToast(false);
  //   }, 5000);
  // }, []);
  return (
    <div className="home-container">
      {/* {showToast ? (
        <ToastMsg message={`Welcome ${loginUser} I hope you enjoy here. `} />
      ) : (
        ""
      )} */}
      <h1>
        <span style={{ fontSize: "100px" }}>&#128075;</span> Welcome !
      </h1>
      <p>Hope you enjoy your visit here. Discover & Know your being cared</p>
    </div>
  );
}

export default Home;
