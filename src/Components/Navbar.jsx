import React from "react";
import Logo from "../assets/logo.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div className="navbar d-flex align-items-center fixed-top  m-5">
      <div className="logo">
        <img src={Logo} alt="page logo" width="50" />
      </div>
      <ul className="nav">
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
      {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
    </div>
  );
}
