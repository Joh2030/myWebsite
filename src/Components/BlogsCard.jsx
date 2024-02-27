import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Blogs from "./Blogs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BlogsCard({ img, text, heading }) {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
