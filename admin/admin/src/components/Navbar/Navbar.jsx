import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo-part">
        <img className="logo" src={assets.logo} alt="" />
        <p className="admin-panel">Admin Panel</p>
        </div>
      <img className="profile" src={assets.profile_image} alt="" />
     
    </div>
  );
};

export default Navbar;