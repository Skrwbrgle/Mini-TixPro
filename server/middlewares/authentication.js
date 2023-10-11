const { verifyToken, tokenGuest } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  const access_token = req.headers.access_token;

  if (access_token) {
    try {
      let tokenUser = verifyToken(access_token);
      req.userData = tokenUser;

      next();
    } catch (e) {
      res.status(401).json({
        message: "Unauthorized token!",
      });
    }
  } else {
    req.userData = { role: "2" };
    next();
  }
};

module.exports = {
  authentication,
};
