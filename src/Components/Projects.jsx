import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ProjectsCard from "./ProjectsCard";
import Pholio from "../assets/pholio1.png";

export default function Projects() {
  return (
    <div className="container" style={{ fontFamily: "Roboto", height: "70vh" }}>
      <h1 className="text-center text-3xl font-bold my-5">Projects</h1>
      <div className="container-projects d-flex justify-content-around mt-8">
        <a href="https://pholio.onrender.com" className="container my-4">
          <ProjectsCard img={Pholio} heading="Photo Album Application" />
        </a>
        <div className="container my-4">
          <ProjectsCard
            img={Pholio}
            heading="Frontend Optimization Checklist"
          />
        </div>
        <div className="container my-4">
          <ProjectsCard
            img={Pholio}
            heading="Frontend Optimization Checklist"
          />
        </div>
      </div>
    </div>
  );
}
