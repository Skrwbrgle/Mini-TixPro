const { booking, payment, user } = require("../models");

class BookingController {
  static async createBooking(req, res) {
    try {
      const { id, role, identification } = req.userData;
      const resPayment = await payment.findAll({
        where: { userId: +id, status: "approved" },
      });

      if (role === "1") {
        if (resPayment.langth !== 0) {
          resPayment.forEach((e) => {
            booking.create({
              userId: +id,
              eventId: e.eventId,
              paymentId: e.id,
              barcode: `${identification}-${e.status}`,
            });
          });

          res.status(200).json({ message: `Has been Booked!` });
        } else {
          res.status(404).json({ message: `Cannot create Booking!` });
        }
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

module.exports = BookingController;
