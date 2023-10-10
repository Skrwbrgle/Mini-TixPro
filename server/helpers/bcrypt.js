const bcrypt = require("bcrypt");
const saltRounds = +process.env.SALT_ROUNDS || 10;

const encrypt = (password) => {
  return bcrypt.hashSync(String(password), saltRounds);
};

const decrypt = (password, hash) => {
  return bcrypt.compareSync(String(password), hash);
};

module.exports = {
  encrypt,
  decrypt,
};
