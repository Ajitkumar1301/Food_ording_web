import React from "react";
import logoImage from "../assets/Logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img className="logo" src={logoImage} alt="logo" />
      </div>
      <div className="nav">
        <ul>
          {/* <li>{onlineStatus ? "✅" : "❌"}</li> */}
          <li>
            {" "}
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="about">About us</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
