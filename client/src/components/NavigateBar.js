import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

function NavigateBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontSize: "2rem" }} className="mb-1 ">
          TixPro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Container>
            <Row>
              <Nav>
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
                    className="me-2 rounded-pill"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-success"
                    className="border-0 rounded-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </Button>
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
