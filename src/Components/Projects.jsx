import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ProjectsCard from "./ProjectsCard";
import Kevin from "../assets/kevin.jpg";

export default function Projects() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-8">Blogs</h1>
      <div className="Project1">
        <div className="flex justify-between my-4">
          <ProjectsCard img={Kevin} heading="Frontend Optimization Checklist" />
        </div>
      </div>
      <div className="Project1">
        <div className="flex justify-between my-4">
          <ProjectsCard img={Kevin} heading="Frontend Optimization Checklist" />
        </div>
      </div>
    </div>
  );
}
