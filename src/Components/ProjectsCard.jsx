import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Projects from "../Components/Projects";
import Card from "react-bootstrap/Card";

export default function ProjectsCard({ logo, heading }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
