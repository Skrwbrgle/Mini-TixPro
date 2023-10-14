import React from "react";
import { Container, Card, ListGroup, Button, Stack } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <Container className="mt-5">
        <Card className="Ubah">
          {/* <Card.Img variant="top" src="https://picsum.photos/180/180" /> */}
          <Card.Body className="">
            <Card.Title>Username</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <Stack gap={3} className="mt-3 py-10">
                <Button variant="primary" className="rounded-pill">
                  Edit Account
                </Button>
                <Button variant="danger" className="rounded-pill">
                  Delete Account
                </Button>
              </Stack>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProfilePage;
