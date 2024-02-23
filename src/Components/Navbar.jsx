import React from "react";
import Logo from "../assets/logo.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="page logo" />
      </div>
      <div className="links">
        <div>About</div>
        <div>Skills</div>
        <div>Blogs</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
