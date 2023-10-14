import React from "react";
import CardEvent from "../components/CardEvent";
import { Container, Stack } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container className="mt-5">
        <Stack gap={3}>
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
