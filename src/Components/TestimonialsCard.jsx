import React from "react";
import "../App.css";
import Testimonials from "../Components/Testimonials";
import Card from "react-bootstrap/Card";

export default function TestimonialsCard({ logo, text, heading, update }) {
  return (
    <div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={logo} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{heading}</h5>
              <p class="card-text">{text}</p>
              <p class="card-text">
                <small class="text-body-secondary">
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
