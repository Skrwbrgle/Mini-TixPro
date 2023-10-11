const { payment } = require("../models");

class PaymentController {
  static async getPayment(req, res) {
    try {
      const { id, role } = req.userData;

      if (role === "1") {
        let userPay = await payment.findAll({
          where: {
            userId: +id,
          },
        });
        res.status(200).json({ userPay });
      } else {
        res.status(403).json({
          message: `Access denided`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = PaymentController;
