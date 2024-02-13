import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Navigation(props) {
  const navigate = useNavigate();

  const authenticated = localStorage.getItem("auth");
  const [isResponsive, setIsResponsive] = useState(false);
  useEffect(() => {
    if (authenticated === null || authenticated === false) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };
  return (
    <div>
      {/* <nav>
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} size="xl" onClick={handleShowNavbar} />
        </div>
        <ul ref={navbar}>
          <li>
            <NavLink to="home" className="link ">
              Home
            </NavLink>
          </li>
          <li>
            Courting Journey
            <ul className="sub-menu">
              <Link to="firstgift" className="link ">
                First Gift
              </Link>{" "}
              <Link to="/crush/slider" className="link">
                New Year's Gift
              </Link>{" "}
              <Link to="/photos" className="link">
                Photos
              </Link>
            </ul>
          </li>
          <li>
            <NavLink to="gfandbf" className="link">
              GF & BF Journey
            </NavLink>
          </li>
          <li>
            <NavLink to="couple" className="link">
              Couple Journey
            </NavLink>
          </li>
        </ul>
      </nav> */}
      <div
        className={`topnav${isResponsive ? " responsive" : ""}`}
        id="myTopnav"
      >
        <NavLink to="/crush/home" className="link" activeclassname="active">
          Home
        </NavLink>
        <div className="dropdown">
          <button className="dropbtn">
            Courting Journey
            <FontAwesomeIcon icon={faCaretDown} className="caret" />
          </button>
          <div className="dropdown-content">
            <Link to="valentine">Valentines</Link>
            <Link to="firstgift">First Gift</Link>{" "}
            <Link to="slider">New Year's Gift</Link>{" "}
            <Link to="photos">Photos</Link>
          </div>
        </div>
        <NavLink to="gfandbf" className="link" activeclassname="active">
          GF & BF Journey
        </NavLink>
        <NavLink to="couple" className="link" activeclassname="active">
          Couple Journey
        </NavLink>
        <NavLink
          to="/"
          className="link "
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </NavLink>
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          className="menu-icon"
          onClick={toggleResponsive}
        />
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
