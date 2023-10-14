import React from "react";

const Seat = (props) => {
  const { isReserved, isSelected, onSelect } = props;

  const seatClass = isReserved
    ? "seat reserved"
    : isSelected
    ? "seat selected"
    : "seat";

  const seatContent = isReserved ? "X" : "S"; // Menampilkan "X" untuk kursi yang sudah dipesan, "S" untuk kursi yang tersedia

  return (
    <div className={seatClass} onClick={onSelect}>
      <span className="seat-content">{seatContent}</span>
    </div>
  );
};

export default Seat;
