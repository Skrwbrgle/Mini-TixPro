import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { registerUser } from "../axios/userAxios";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [identification, setIdentification] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika pendaftaran di sini
    registerUser({ username: fullName, email, password, identification });
  };

  return (
    <Container>
      <h2 className="text-center">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Identification</Form.Label>
          <Form.Control
            type="number"
            placeholder="Identification"
            value={identification}
            onChange={(e) => setIdentification(e.target.value)}
          />
        </Form.Group>

        <Col className="text-center">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default RegisterPage;
