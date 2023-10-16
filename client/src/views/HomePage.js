import React, { useState, useEffect } from "react";
import CardEvent from "../components/CardEvent";
import { Container, Stack } from "react-bootstrap";
import { getEvents } from "../axios/eventAxios";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents((result) => setEvents(result));
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Stack gap={3}>
          {events.length > 0 ? (
            events.map((event) => {
              const { id, title, event_date, address, price, image } = event;
              return (
                <CardEvent
                  id={id}
                  title={title}
                  event_date={event_date}
                  address={address}
                  price={price}
                  image={image}
                />
              );
            })
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
