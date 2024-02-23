import React from "react";
import Skills from "../Components/Skills";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function SkillsCard({ logo, text, heading }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
