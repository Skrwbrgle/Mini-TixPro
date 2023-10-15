import Modal from "react-bootstrap/Modal";
import Eticket from "./Eticket";
import { useEffect } from "react";

const ModalSingleTicket = (props) => {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  return (
    <Modal
      {...props}
      size="extra-small"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modContent"
    >
      <div style={{ width: "100%", margin: "auto" }}>
        <Eticket detail={true} />
      </div>
    </Modal>
  );
};

export default ModalSingleTicket;
