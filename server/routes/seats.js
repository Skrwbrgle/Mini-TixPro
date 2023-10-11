const seatRoutes = require("express").Router();
const { SeatController } = require("../controllers");
const { authentication } = require("../middlewares/authentication");

// seatRoutes.get("/", SeatController.getSeat);
// seatRoutes.get("/:id", authentication, SeatController.getOneEvent);
seatRoutes.post("/create/:id", authentication, SeatController.createSeat);
// seatRoutes.put("/edit/:id", authentication, SeatController.updateEvent);
// seatRoutes.delete("/delete/:id", authentication, SeatController.deleteEvent);

module.exports = seatRoutes;
