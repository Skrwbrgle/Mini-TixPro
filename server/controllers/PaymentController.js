const { payment, event } = require("../models");
const midtransClient = require("midtrans-client");
const sumPay = require("../helpers/sumPrice");

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
  static async getPaymentDetail(req, res) {
    try {
      const { id, role } = req.userData;
      const idPayment = +req.params.id;

      if (role === "1") {
        let userPay = await payment.findOne({
          where: {
            id: idPayment,
            userId: +id,
          },
          include: {
            model: event,
            attributes: ["price"],
          },
        });
        res.status(200).json({
          userPay,
          redirect_url: `https://app.sandbox.midtrans.com/snap/v3/redirection/${userPay.midtransToken}`,
        });
      } else {
        res.status(403).json({
          message: `Access denided`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createPayment(req, res) {
    try {
      const { id, role, username, email, no_telp } = req.userData;
      const idEvent = +req.params.id;
      const { total_ticket } = req.body;
      const payments = await payment.findAll({
        order: [["id", "DESC"]],
        limit: 1,
      });

      if (role === "1") {
        let getPriceEvent = await event.findOne({
          where: {
            id: idEvent,
          },
        });

        let snap = new midtransClient.Snap({
          isProduction: false,
          serverKey: "SB-Mid-server-Nb1R0x1JOCqBdsao4voyP9Z3",
        });

        let parameter = {
          transaction_details: {
            order_id: "ORDER-" + (payments[0].id + 1),
            gross_amount: sumPay(getPriceEvent.price, total_ticket),
          },
          credit_card: {
            secure: true,
          },
          customer_details: {
            username: username,
            email: email,
            phone: no_telp || "",
          },
        };

        const transaction = await snap.createTransaction(parameter);
        let transactionToken = transaction.token;
        let userPay = await payment.create({
          userId: +id,
          eventId: idEvent,
          total_ticket,
          midtransToken: transactionToken,
        });

        res.status(200).json({ userPay });
      }
    } catch (err) {
      // res.status(500).json(err);
      console.log(err);
    }
  }

  static async approvePayment(req, res) {
    try {
      const { id, role } = req.userData;
      const { order_id, transaction_status } = req.query;

      const idOrder = order_id.match(/\d/g).join("");
      const statusOrder =
        transaction_status === "settlement" ? "approved" : "rejected";

      if (role === "1") {
        let userPay = await payment.update(
          {
            status: statusOrder,
          },
          {
            where: {
              id: +idOrder,
            },
          }
        );
        res.status(201).json({
          message: `Payment status ${statusOrder}!`,
        });
      } else {
        res.status(403).json({
          message: `Access denided`,
        });
      }
    } catch (err) {
      // res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = PaymentController;
