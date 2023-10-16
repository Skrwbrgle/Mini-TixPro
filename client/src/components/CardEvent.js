import { Card } from "react-bootstrap";

function CardEvent(props) {
  return (
    <>
      <Card className="Carding bg-light border-light">
        <Card.Img
          className="Card-Image"
          src={
            props.image === ""
              ? "https://via.placeholder.com/932x270"
              : props.image
          }
        />
        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <p>{props.event_date}</p>
            <p>{props.address}</p>
            <p>{props.price}</p>
          </Card.Text>
          <Card.Link
            id={props.id}
            href={`/detail`}
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
