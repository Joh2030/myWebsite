import React from "react";
import "../App.css";
import myphoto from "../assets/myphoto.jpg";

export default function HeroSection() {
  return (
    <div className="Herosection d-flex text-center py-5 m-5">
      <div>
        <p className="container mt-5 py-5">
          Hello, this is {""}
          <i>
            <b>Joram Gathundo</b>
          </i>
          ,
        </p>
        <p>
          I'm a results-driven Fullstack Web Developer passionate about crafting
          seamless digital experiences. Explore my projects and let's bring your
          ideas to life!
        </p>
        <p>
          <u>SCROLL FOR MORE</u>
        </p>
      </div>
      <div className="image py-5">
        <img src={myphoto} alt="Joram Gathundo" width="50%" />
      </div>
    </div>
  );
}
