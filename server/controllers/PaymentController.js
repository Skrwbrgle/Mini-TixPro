const { payment, event, seat } = require("../models");
const midtransClient = require("midtrans-client");
const { sumPay, createOrder } = require("../helpers/order");
const { Op } = require("sequelize");

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
        res.status(200).json(userPay);
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
      console.log(req.query);
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
      const { seats_order } = req.body;

      if (role === "1") {
        if (!seats_order) {
          res.status(403).json({
            message: `Bad Request`,
          });
          return;
        }
        const arrSeat = seats_order
          .split(",")
          .map((e) => +e)
          .filter((e) => e !== 0);
        const seatExist = await seat.findAll({
          where: {
            id: arrSeat,
          },
        });
        if (seatExist.length !== arrSeat.length) {
          res.status(403).json({
            message: `Some seat not exist`,
          });
          return;
        }

        const seatBooked = await payment.findAll({
          where: {
            eventId: idEvent,
            [Op.not]: [{ status: "rejected" }],
            seatId: { [Op.overlap]: arrSeat },
          },
        });

        if (seatBooked.length !== 0) {
          res.status(403).json({
            message: `Some seat has been Booked`,
          });
          return;
        }

        let getPriceEvent = await event.findOne({
          where: {
            id: idEvent,
          },
        });

        let snap = new midtransClient.Snap({
          isProduction: false,
          serverKey: "SB-Mid-server-Nb1R0x1JOCqBdsao4voyP9Z3",
        });

        const idOrder = createOrder();
        let parameter = {
          transaction_details: {
            order_id: idOrder,
            gross_amount: sumPay(getPriceEvent.price, arrSeat.length),
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
          eventId: +idEvent,
          seatId: arrSeat,
          orderId: idOrder,
          total_ticket: arrSeat.length,
          midtransToken: transactionToken,
        });

        res.status(200).json(userPay);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateStatus(req, res) {
    try {
      const { order_id, transaction_status } = req.query;

      if (!["settlement", "expire"].includes(transaction_status)) {
        res.status(403).json({
          message: `Bad Request`,
        });
        return;
      }

      const statusOrder =
        transaction_status === "settlement" ? "approved" : "rejected";

      await payment.update(
        {
          status: statusOrder,
        },
        {
          where: {
            orderId: order_id,
          },
        }
      );
      res.status(201).json({
        message: `Payment status ${statusOrder}!`,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = PaymentController;
