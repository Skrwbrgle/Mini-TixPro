const paymentRoutes = require("express").Router();
const { PaymentController } = require("../controllers");
const { authentication } = require("../middlewares/authentication");

paymentRoutes.get("/", authentication, PaymentController.getPayment);
paymentRoutes.get("/:id", authentication, PaymentController.getPaymentDetail);
paymentRoutes.post(
  "/create/:id",
  authentication,
  PaymentController.createPayment
);
paymentRoutes.put(
  "/approve/",
  authentication,
  PaymentController.approvePayment
);
// paymentRoutes.delete("/detele/:id", (req, res) => {});

module.exports = paymentRoutes;
