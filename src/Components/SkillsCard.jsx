import React from "react";
import Skills from "../Components/Skills";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function SkillsCard({ logo, heading }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
