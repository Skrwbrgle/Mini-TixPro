const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET || "secret";

const generateToken = (payload) => {
  const {
    id,
    username,
    email,
    no_telp,
    address,
    identification,
    age,
    gender,
    role,
    image,
  } = payload;
  return jwt.sign(
    {
      id,
      username,
      email,
      no_telp,
      address,
      identification,
      age,
      gender,
      role,
      image,
    },
    jwtSecret
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret);
};

module.exports = {
  generateToken,
  verifyToken,
};
