import React from "react";
import myphoto from "../assets/myphoto.jpg";

function HeroSection() {
  return (
    <div className="Herosection">
      <div>
        <h1>Hello, this is Joram Gathundo,</h1>
        <p>
          I'm a results-driven Fullstack Web Developer passionate about crafting
          seamless digital experiences. Explore my projects and let's bring your
          ideas to life!
        </p>
        <h2>SCROLL FOR MORE</h2>
      </div>
      <div className="image">
        <img src={myphoto} alt="Joram Gathundo" />
      </div>
    </div>
  );
}

export default HeroSection;
