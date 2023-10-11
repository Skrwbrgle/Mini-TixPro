const { seat } = require("../models");
const { generetSeat } = require("../helpers/seatGenerator");

class SeatController {
  static async createSeat(req, res) {
    try {
      const roleAccess = req.userData.role;
      if (roleAccess === "0") {
        const idEvent = +req.params.id;
        const { Num_Seat, Seat_Code } = req.body;
        const number_seat = generetSeat(Num_Seat, Seat_Code);

        number_seat.forEach((e) => {
          seat.create({
            numSeat: e,
            eventId: idEvent,
          });
        });
        res.status(200).json({ message: `seat created successfully` });
      } else {
        res
          .status(403)
          .json({ message: "Access denied: Admin privilege required!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteSeat(req, res) {
    try {
      const roleAccess = req.userData.role;
      if (roleAccess === "0") {
        const { numSeat, idEvent } = req.query;
        const deleted = await seat.destroy({
          where: {
            numSeat: numSeat,
            eventId: +idEvent,
          },
        });

        deleted === 1
          ? res.status(200).json({ massage: `successfully deleted ${numSeat}` })
          : res.status(404).json({ message: `Seat can not found` });
      } else {
        res
          .status(403)
          .json({ message: "Access denied: Admin privilege required!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = SeatController;
