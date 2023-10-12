const { verifyToken } = require("../helpers/jwt");
const tokenBlacklist = new Set("role=2");

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

const logoutAuth = (req, res, next) => {
  const access_token = req.headers.access_token;

  if (!access_token) {
    return res.status(401).json({ message: `Unauthorized` });
  }
  try {
    const token = access_token.split(" ")[1];
    req.userData = { role: "2" };
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ message: `User Logout` });
    }
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  authentication,
  logoutAuth,
};
