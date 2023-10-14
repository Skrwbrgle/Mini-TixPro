import React from "react";
import {
  Container,
  Col,
  Card,
  Image,
  CardBody,
  Row,
  CardTitle,
  ListGroup,
  Button,
  Stack,
} from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <Container className="mt-5 justify-content-center">
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="https://picsum.photos/180/180" /> */}
          <Card.Body>
            <Card.Title>Username</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <Stack gap={3} className="mt-3 py-10">
                <Button variant="primary">Edit Account</Button>
                <Button variant="danger">Delete Account</Button>
              </Stack>
            </ListGroup>
          </Card.Body>
        </Card>

        {/* <Row>
          <Col>
            
          </Col>
          <Col>
            <Card>
              <Image
                src="https://picsum.photos/100/100"
                className="card-img-top"
              ></Image>
              <CardBody>
                <Row>
                  <Col className="col-10">
                    <CardTitle>Username</CardTitle>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default ProfilePage;
