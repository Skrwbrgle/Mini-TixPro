import React from "react";
import { Container, Card, ListGroup, Button, Stack } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <Card className="Card1 mx-auto">
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
      </Container>
    </>
  );
};

export default ProfilePage;
