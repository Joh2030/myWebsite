import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  //   const [isDiplayed, setIsDiplayed] = useState(false);
  //   const [navbarColor, setNavbarColor] = useState(false);

  //   const changeNavBackground = () => {
  //     if (window.scrollY >= 90) {
  //       navbarColor(true);
  //     } else {
  //       setNavbarColor(false);
  //     }
  //   };

  //   window.addEventListener("scroll", changeNavBackground);

  //   const menuItems = ["About", "Skills", "Blogs", "Contact"];

  //   function handleClick() {
  //     setIsDiplayed(!isDiplayed);
  //   }
  return (
    <div className="navbar bg-black p-5 d-flex align-items-center">
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
