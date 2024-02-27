import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import myphoto from "../assets/myphoto.jpg";

export default function HeroSection() {
  return (
    <div
      className="Herosection bg-black d-flex flex-row align-items-center text-center"
      style={{ height: "100vh" }}
    >
      <div>
        <p className="container-desc ">
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
      <div className="image">
        <img src={myphoto} alt="Joram Gathundo" width="50%" />
      </div>
    </div>
  );
}
