import React from "react";
import CardEvent from "./CardEvent";
import { Container, Stack } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container className="my-2">
        <Stack gap={3}>
          <CardEvent></CardEvent>
          <CardEvent></CardEvent>
          <CardEvent></CardEvent>
          <CardEvent></CardEvent>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
