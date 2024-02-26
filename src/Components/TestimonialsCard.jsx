import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Testimonials from "../Components/Testimonials";
import Card from "react-bootstrap/Card";

export default function TestimonialsCard({ logo, text, heading, update }) {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px;" }}>
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
      </div>
    </div>
  );
}
