const routes = require("express").Router();

routes.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to TixPro!",
  });
});

const userRoutes = require("./users");
const eventRoutes = require("./events");
const seatRoutes = require("./seats");
const paymentRoutes = require("./payments");
const bookingRoutes = require("./bookings");

routes.use("/api/users", userRoutes);
routes.use("/api/events", eventRoutes);
routes.use("/api/seats", seatRoutes);
routes.use("/api/payments", paymentRoutes);
routes.use("/api/bookings", bookingRoutes);

module.exports = routes;
