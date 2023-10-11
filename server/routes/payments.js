const paymentRoutes = require("express").Router();
// const { EventController } = require("../controllers");

// paymentRoutes.get("/", EventController.getEvents);
paymentRoutes.get("/:id", (req, res) => {});
paymentRoutes.post("/create/:id", (req, res) => {});
paymentRoutes.put("/edit/:id", (req, res) => {});
paymentRoutes.delete("/detele/:id", (req, res) => {});

module.exports = paymentRoutes;
