const paymentRoutes = require("express").Router();
const { PaymentController } = require("../controllers");
const { authentication } = require("../middlewares/authentication");

paymentRoutes.get("/approve", PaymentController.approvePayment);
paymentRoutes.get("/", authentication, PaymentController.getPayment);
paymentRoutes.get("/:id", authentication, PaymentController.getPaymentDetail);
paymentRoutes.post(
  "/create/:id",
  authentication,
  PaymentController.createPayment
);

module.exports = paymentRoutes;
