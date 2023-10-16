import { Card } from "react-bootstrap";

function CardEvent(props) {
  const accessToken = localStorage.getItem("access_token");
  const bookingNow = accessToken === null ? "d-none" : "d-block";
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
          <div className={bookingNow}>
            <Card.Link
              id={props.id}
              href={`/detail`}
              class="btn btn-primary text-center rounded-pill btn-book"
            >
              Booking now
            </Card.Link>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default CardEvent;
