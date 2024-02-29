import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ProjectsCard from "./ProjectsCard";
import Pholio from "../assets/pholio1.png";
import Website from "../assets/website.png";
import Tindog from "../assets/tindog.png";
import Recipes from "../assets/recipes.png";

export default function Projects() {
  return (
    <div
      className="container p-5"
      style={{ fontFamily: "Roboto", height: "100%" }}
    >
      <h1 className="text-center text-3xl font-bold my-5">Projects</h1>
      <div className="container-projects d-flex justify-content-around mt-8">
        <a href="https://pholio.onrender.com" className="container my-4">
          <ProjectsCard img={Pholio} heading="Photo Album Application" />
        </a>
        <a
          href="https://joramportifolio.netlify.app/"
          className="container my-4"
        >
          <ProjectsCard img={Website} heading="My Portifolio" />
        </a>
        <a
          href="https://cookituprecipes.netlify.app/"
          className="container my-4"
        >
          <ProjectsCard
            img={Recipes}
            heading="Easy Recipes You Can Prepare at Home"
          />
        </a>
        <a href="https://meetdog.netlify.app/" className="container my-4">
          <ProjectsCard img={Tindog} heading="Tindog: Meet new Dogs nearby" />
        </a>
      </div>
    </div>
  );
}
