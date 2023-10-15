import React from "react";
import Eticket from "../components/Eticket";
import Container from "react-bootstrap/Container";
import ModalSingleTicket from "../components/ModalSingleTicket";

const BookingPage = () => {
  const data = [1, 2, 3, 4, 5, 6];
  const [state, setState] = React.useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick = (data) => {
    if (data) {
      setState(data);
    } else {
      setState(undefined);
    }
    setModalShow(!modalShow);
  };
  return (
    <>
      <Container className="d-flex flex-wrap mt-4 gap-4 justify-content-center">
        {data.map((v, i) => (
          <Eticket
            key={i}
            chooseTicket={() => {
              handleClick(v);
            }}
          />
        ))}
      </Container>
      <ModalSingleTicket
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={state}
      />
    </>
  );
};

export default BookingPage;
