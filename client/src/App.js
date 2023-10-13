import "./App.css";
import React from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">TixPro</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Container>
                <Row>
                  <Col className="d-flex align-items-center justify-content-between">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">User</Nav.Link>
                    <Nav.Link href="#action4">Payment</Nav.Link>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end">
                    <Nav.Link href="#action4">Login</Nav.Link>
                    <Button className="rounded-pill">
                      <b>Daftar sekarang</b>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
}

export default App;
