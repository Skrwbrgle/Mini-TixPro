const sumPay = (price, total_ticket) => {
  return price * total_ticket;
};
const createOrder = () => {
  const date = new Date();
  return `ORDER-D${date.getFullYear()}${date.getMonth()}${date.getDate()}-T${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
};

module.exports = { sumPay, createOrder };
