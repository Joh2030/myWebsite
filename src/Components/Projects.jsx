import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ProjectsCard from "./ProjectsCard";
import Kevin from "../assets/kevin.jpg";

export default function Projects() {
  return (
    <div className="container" style={{ height: "60vh" }}>
      <h1 className="text-center text-3xl font-bold my-5">Projects</h1>
      <div className="container-projects d-flex justify-content-around mt-8">
        <div className="container justify-betweenn my-4">
          <ProjectsCard img={Kevin} heading="Frontend Optimization Checklist" />
        </div>
        <div className="container my-4">
          <ProjectsCard img={Kevin} heading="Frontend Optimization Checklist" />
        </div>
        <div className="container my-4">
          <ProjectsCard img={Kevin} heading="Frontend Optimization Checklist" />
        </div>
      </div>
    </div>
  );
}
