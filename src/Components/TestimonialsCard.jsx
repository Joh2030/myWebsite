import React from "react";
import "../App.css";
import Testimonials from "../Components/Testimonials";
import Card from "react-bootstrap/Card";

export default function TestimonialsCard({ logo, text, heading, update }) {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{heading}</Card.Title>
            <Card.Text>{text}</Card.Text>
            {/* <Button variant="primary">Read More</Button> */}
          </Card.Body>
        </Card>
      </div>
      {/* <div className="card mb-3" style="max-width: 540px;">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={logo} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{heading}</h5>
              <p className="card-text">{text}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {update ? `Last updated ${update}` : ""}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
