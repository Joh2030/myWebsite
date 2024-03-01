import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Button from "react-bootstrap/Button";
import myphoto from "../assets/myphoto.jpg";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

export default function Herosection() {
  return (
    <div
      className="Herosection d-flex flex-row align-items-center"
      style={{ fontFamily: "Roboto", background: "#F0EDCF", height: "100vh" }}
    >
      <div className="container text-center m-5">
        <p>
          Hello, I am {""}
          <i>
            <b>Joram Gathundo</b>
          </i>
          ,
        </p>
        <p>
          A results-driven Fullstack Web Developer, passionate about crafting
          seamless digital experiences. Explore my projects and let's bring your
          ideas to life!
        </p>
        <div className="buttons">
          <Button
            className="btn btn-primary rounded-right"
            variant="primary m-4"
            style={{
              borderRadius: "1rem",
              width: "150px",
              height: "40px",
              filter: "grayscale(50%)",
            }}
          >
            Download CV
          </Button>
          <Button
            className="btn btn-primary rounded-right"
            variant="primary m-2"
            style={{
              borderRadius: "1rem",
              width: "150px",
              height: "40px",
              filter: "grayscale(50%)",
            }}
          >
            Contact Info
          </Button>
        </div>
        <div className="connect m-4">
          <a
            href="https://www.linkedin.com/in/joram-kiarie/"
            img
            className="me-3"
            src={Linkedin}
            alt="linkedin"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              filter: "grayscale(50%)",
            }}
          />
          <a
            href="https://github.com/Joh2030"
            img
            src={Github}
            alt="github"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              filter: "grayscale(50%)",
            }}
          />
        </div>
        <p>
          <u>
            <i>
              Scroll for <b>MORE</b>
            </i>
          </u>
        </p>
      </div>
      <div className="image">
        <img
          src={myphoto}
          alt="Joram Gathundo"
          width="80%"
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
