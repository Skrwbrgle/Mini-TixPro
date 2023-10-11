const { verifyToken } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  const access_token = req.headers.access_token;

  if (access_token) {
    try {
      let verifyToken = tokenVerifer(access_token);
      req.userData = verifyToken;
      next();
    } catch (e) {
      res.status(401).json({
        message: "Unauthorized token!",
      });
    }
  } else {
    res.status(404).json({
      message: "Token not found!",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (req.userData.role === "0") {
    next();
  } else {
    res.status(403).json({
      message: "Access denied: Admin privilege required!",
    });
  }
};

const isUser = (req, res, next) => {
  if (req.userData.role === "1") {
    next();
  } else {
    res.status(403).json({
      message: "Access denied: User privilege required!",
    });
  }
};

module.exports = {
  authentication,
  isAdmin,
  isUser,
};
