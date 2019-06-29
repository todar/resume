import React from "react";
import "./Header.css";
import profile from "./profile-200x200.jpg";

function Header() {
  return (
    <div className="Header">
      <img className="Header-profile" src={profile} alt="profile" />
      <h1 className="Header-name white-text">Robert Todar</h1>
      <h3 className="Header-title">Developer</h3>
    </div>
  );
}

export default Header;
