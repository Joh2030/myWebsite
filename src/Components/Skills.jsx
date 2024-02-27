import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
      <div className="container grid grid-cols-6 gap-10 justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={HTML}
          heading="HTML"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={CSS}
          heading="CSS"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={JS}
          heading="Javascript"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={ExpressJS}
          heading="ExpressJS"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={MongoDB}
          heading="MongoDB"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard logo={NodeJS} heading="NodeJS" />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={ReactJS}
          heading="React"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={SQL}
          heading="SQL"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={Tailwindcss}
          heading="Tailwindcss"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={Bootstrap}
          heading="Bootstrap"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        <SkillsCard
          logo={Postgresql}
          heading="Postgresql"
          text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
    </div>
  );
}
