import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Contact() {
  return (
    <div>
      <Form className="contact m-5">
        <h1>Contact Us</h1>
        <Card style={{ fontFamily: "Roboto", width: "50%" }}>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="johndoe@example.com" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {/* <Card.Text>{text}</Card.Text> */}
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
}
