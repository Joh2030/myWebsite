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
    <div>
      <div
        className="blogs pt-4"
        style={{ background: "#F0EDCF", fontFamily: "Roboto" }}
      >
        <h1 className="text-center text-3xl font-bold m-5">Blogs</h1>
        <div className="container-fluid justify-content-center">
          <div className="container d-flex justify-content-between flex-wrap">
            <div className="project1 mb-5">
              <a href="https://meetdog.netlify.app/" className="container">
                <ProjectsCard
                  img={Tindog}
                  heading="Tindog: Meet new Dogs nearby"
                />
              </a>
            </div>
            <div className="project1 mb-5">
              <a href="https://pholio.onrender.com" className="container">
                <ProjectsCard img={Pholio} heading="Photo Album Application" />
              </a>
            </div>
            <div className="project1 mb-5">
              <a
                href="https://cookituprecipes.netlify.app/"
                className="container"
              >
                <ProjectsCard
                  img={Recipes}
                  heading="Easy Recipes You Can Prepare at Home"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="text-center text-3xl font-bold my-5">Projects</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="container d-flex  justify-content-between m-5">
            <a href="https://pholio.onrender.com" className="container">
              <ProjectsCard img={Pholio} heading="Photo Album Application" />
            </a>
            <a href="https://meetdog.netlify.app/" className="container">
              <ProjectsCard
                img={Tindog}
                heading="Tindog: Meet new Dogs nearby"
              />
            </a>
            <a
              href="https://cookituprecipes.netlify.app/"
              className="container"
            >
              <ProjectsCard
                img={Recipes}
                heading="Easy Recipes You Can Prepare at Home"
              />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
