import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Seat from "../components/Seat";
import { getDetailEvent } from "../axios/eventAxios";

const DetailPage = (props) => {
  const { id } = props;
  console.log(id);
  const [eventSeat, setEventSeat] = useState([]);
  const [seats, setSeats] = useState([
    { id: 1, isReserved: false, isSelected: false },
    { id: 2, isReserved: false, isSelected: false },
    { id: 3, isReserved: false, isSelected: false },
    { id: 4, isReserved: true, isSelected: false },
    { id: 5, isReserved: false, isSelected: false },
    // Tambahkan kursi lainnya di sini
  ]);

  useEffect(() => {
    getDetailEvent((result) => setEventSeat(result));
  }, []);

  const handleSeatSelect = (seatId) => {
    // Fungsi ini akan menangani pemilihan kursi
    // Anda dapat mengubah status isSelected di sini
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          return { ...seat, isSelected: !seat.isSelected };
        }
        return seat;
      })
    );
  };

  return (
    <Container>
      <Row className="text-center my-2 mx-auto Order">
        <h1>Stage</h1>
      </Row>

      <div className="seats-container">
        {seats.map((seat) => (
          <Seat
            isReserved={seat.isReserved}
            isSelected={seat.isSelected}
            onSelect={() => handleSeatSelect(seat.id)}
          />
        ))}
      </div>
      <Row className="text-center">
        <Col>
          <Button
            href="/ticket"
            variant="success"
            size="lg"
            className="mt-5 order-button"
          >
            Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
