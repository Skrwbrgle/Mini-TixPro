const createOrder = () => {
  const date = new Date();
  return `ORDER-D${date.getFullYear()}${date.getMonth()}${date.getDate()}-${date.getTime()}}`;
};

module.exports = createOrder;
