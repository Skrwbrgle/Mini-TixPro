import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

function NavigateBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container fluid>
        <Navbar.Brand href="/">TixPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Container>
            <Row>
              <Nav
              // style={{ maxHeight: "100px" }}
              // navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="#">Payment</Nav.Link>
                <Nav.Link href="#">My Ticket</Nav.Link>
              </Nav>
            </Row>
          </Container>
          <Container>
            <Row>
              <Nav
                className="me-auto my-lg-0"
                // style={{ maxHeight: "100px" }}
                // navbarScroll
              >
                <Nav.Link href="#" className="ms-md-auto my-2">
                  Login
                </Nav.Link>
                <Nav.Link href="#">
                  <Button variant="primary" className="rounded-pill">
                    Register
                  </Button>
                </Nav.Link>
              </Nav>
            </Row>
            <Row className="mt-2">
              <Nav className="justify-content-end">
                <Form className="d-flex col-12 col-md-8">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigateBar;
