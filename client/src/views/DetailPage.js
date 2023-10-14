import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Seat from "../components/Seat";

const DetailPage = () => {
  const [seats, setSeats] = useState([
    { id: 1, isReserved: false, isSelected: false },
    { id: 2, isReserved: true, isSelected: false },
    { id: 3, isReserved: false, isSelected: false },
    { id: 4, isReserved: false, isSelected: false },
    { id: 5, isReserved: false, isSelected: false },
    { id: 6, isReserved: false, isSelected: false },
    { id: 7, isReserved: true, isSelected: false },
    // Tambahkan kursi lainnya di sini
  ]);

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
      <Row className="mobile-center">
        {seats.map((seat) => (
          <Col key={seat.id}>
            <Seat
              isReserved={seat.isReserved}
              isSelected={seat.isSelected}
              onSelect={() => handleSeatSelect(seat.id)}
            />
          </Col>
        ))}
      </Row>
      <Row className="text-center">
        <Col>
          <Button variant="success" size="lg" className="mt-5 order-button">
            Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
