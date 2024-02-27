import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import SkillsCard from "./SkillsCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HTML from "../assets/html5.png";
import CSS from "../assets/css3.png";
import JS from "../assets/js.png";
import ExpressJS from "../assets/icons8-express-js-50.png";
import MongoDB from "../assets/icons8-mongodb-48.png";
import NodeJS from "../assets/nodejs.png";
import ReactJS from "../assets/react.png";
import SQL from "../assets/sql.png";
import Tailwindcss from "../assets/tailwindcss.svg";
import Bootstrap from "../assets/bootstrap.png";
import Postgresql from "../assets/database.png";

export default function Skills() {
  return (
    <div className="container-skills p-5">
      <h1 className="text-center m-5" style={{ fontFamily: "Roboto" }}>
        Skills
      </h1>
      <div
        className="container-skills d-flex flex-direction-row text-center mt-5 mb-5"
        style={{ fontFamily: "Roboto", height: "30vh" }}
      >
        <div className="container ">
          <img src={HTML} heading="HTML" width={60} />
        </div>
        <div className="container">
          <img src={CSS} heading="CSS" width={60} />
        </div>
        <div className="container ">
          <img src={JS} heading="Javascript" width={60} />
        </div>
        <div className="container">
          <img src={ExpressJS} heading="ExpressJS" width={60} />
        </div>
        <div className="container">
          <img src={MongoDB} heading="MongoDB" width={60} />
        </div>
        <div className="container">
          <img src={NodeJS} heading="NodeJS" width={60} />
        </div>
        <div className="container">
          <img src={ReactJS} heading="React" width={60} />
        </div>
        <div className="container">
          <img src={SQL} heading="SQL" width={60} />
        </div>
        <div className="container ">
          <img src={Tailwindcss} heading="Tailwindcss" width={60} />
        </div>
        <div className="container ">
          <img src={Bootstrap} heading="Bootstrap" width={60} />
        </div>
        <div className="container ">
          <img src={Postgresql} heading="Postgresql" width={60} />
        </div>
      </div>
    </div>
  );
}
