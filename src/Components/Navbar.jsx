import React from "react";
import Logo from "../assets/logo.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div className="navbar d-flex flex-col md:flex-row justify-content-around">
      <div className="logo">
        <img src={Logo} alt="page logo" width="50" />
      </div>
      <ul className="navbar-nav d-flex flex-row ">
        <li className="nav-item">
          <a className="nav-link" href="about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="blogs">
            Blogs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
