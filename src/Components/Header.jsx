import React from "react";
import logoImage from "../assets/Logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cart");

  // const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between px-12 py-8 bg-slate-300 shadow-lg">
      <div>
        <Link to="">
          <img className="w-24 cursor-pointer" src={logoImage} alt="logo" />
        </Link>
      </div>
      <div className="pt-4 px-9">
        <ul className="flex flex-row items-center">
          {/* <li>{onlineStatus ? "✅" : "❌"}</li> */}
          <li className="px-4">
            <Link to="">Home</Link>
          </li>
          <li className="px-4">
            <Link to="about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
