import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BlogsCard({ img, text, heading }) {
  return (
    <div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img variant="top" src={img} alt="" />
              <div className="card-body">
                <h className="card-title">{heading}</h>
                <p className="card-text">{text}</p>
                <Button variant="primary">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
