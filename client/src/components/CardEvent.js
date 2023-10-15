import { Card } from "react-bootstrap";

function CardEvent() {
  return (
    <>
      <Card className="Carding bg-light border-light">
        <Card.Img
          className="Card-Image"
          src="https://via.placeholder.com/932x270"
        />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Link
            href="/detail"
            class="btn btn-primary text-center rounded-pill btn-book"
          >
            Booking now
          </Card.Link>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default CardEvent;
