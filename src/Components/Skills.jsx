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
    <div>
      <h1 className="text-center mt-4">Skills</h1>
      <div className="container ">
        <SkillsCard logo={HTML} heading="HTML" />
      </div>
      <div className="container">
        <SkillsCard logo={CSS} heading="CSS" />
      </div>
      <div className="container ">
        <SkillsCard logo={JS} heading="Javascript" />
      </div>
      <div className="container">
        <SkillsCard logo={ExpressJS} heading="ExpressJS" />
      </div>
      <div className="container">
        <SkillsCard logo={MongoDB} heading="MongoDB" />
      </div>
      <div className="container">
        <SkillsCard logo={NodeJS} heading="NodeJS" />
      </div>
      <div className="container">
        <SkillsCard logo={ReactJS} heading="React" />
      </div>
      <div className="container">
        <SkillsCard logo={SQL} heading="SQL" />
      </div>
      <div className="container ">
        <SkillsCard logo={Tailwindcss} heading="Tailwindcss" />
      </div>
      <div className="container ">
        <SkillsCard logo={Bootstrap} heading="Bootstrap" />
      </div>
      <div className="container ">
        <SkillsCard logo={Postgresql} heading="Postgresql" />
      </div>
    </div>
  );
}
