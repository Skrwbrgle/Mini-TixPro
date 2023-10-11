const seatRoutes = require("express").Router();
const { SeatController } = require("../controllers");
const { authentication } = require("../middlewares/authentication");

seatRoutes.post("/create/:id", authentication, SeatController.createSeat);
seatRoutes.delete("/delete", authentication, SeatController.deleteSeat);

module.exports = seatRoutes;
