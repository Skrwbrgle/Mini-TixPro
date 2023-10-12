const bookingRoutes = require("express").Router();
const { BookingController } = require("../controllers");
const { authentication } = require("../middlewares/authentication");

bookingRoutes.post("/create", authentication, BookingController.createBooking);

module.exports = bookingRoutes;
