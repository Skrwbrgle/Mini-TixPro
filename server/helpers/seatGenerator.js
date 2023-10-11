const generetSeat = (Num_Seat, Seat_Code) => {
  const seatNum = [];
  for (let i = 1; i <= Num_Seat; i++) {
    const seatNumber = `${Seat_Code}${i}`;
    seatNum.push(seatNumber);
  }
  return seatNum;
};

module.exports = {
  generetSeat,
};
