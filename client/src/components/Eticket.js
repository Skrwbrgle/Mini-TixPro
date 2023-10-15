import React, { useEffect } from "react";

const Eticket = (props) => {
  return (
    <>
      <div className="ticket position-relative" onClick={props.chooseTicket}>
        <div className="grad">
          <img
            src="https://cdn.cgv.id/uploads/movie/compressed/22003600.jpg"
            className="ticket-image"
          ></img>
        </div>
        <div className="ticket-text ">
          <div className="content-ticket">
            <div className="mx-4 mb-3">
              <h3>The Batman {props.detail ? "(ini detail)" : ""}</h3>
              <p>5 July, 12:00</p>
            </div>
            <div className="crop-ticket-left" />
            <div className="crop-ticket-right" />
            <div className="content-ticket barcode-ticket">
              <h5>
                SEAT <br />
                A1
              </h5>
              <img
                src="https://barcode.tec-it.com/barcode.ashx?data=ABC-abc-1234&code=Code128&translate-esc=on&color=ffffff&bgcolor=ff7746&eclevel=L"
                className="w-100 mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eticket;
