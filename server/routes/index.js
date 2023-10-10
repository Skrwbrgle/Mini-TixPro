const routes = require("express").Router();

routes.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to TixPro!",
  });
});

module.exports = routes;
