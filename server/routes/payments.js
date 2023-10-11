const paymentRoutes = require("express").Router();
const { PaymentController } = require("../controllers");
const { authentication } = require("../middlewares/authentication");

paymentRoutes.get("/", authentication, PaymentController.getPayment);
paymentRoutes.post("/create/:id", (req, res) => {});
paymentRoutes.put("/edit/:id", (req, res) => {});
paymentRoutes.delete("/detele/:id", (req, res) => {});

module.exports = paymentRoutes;
