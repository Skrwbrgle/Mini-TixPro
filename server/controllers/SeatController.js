const { seat } = require("../models");
const { generetSeat } = require("../helpers/seatGenerator");

class SeatController {
  static async getSeat(req, res) {
    try {
      let seats = await seat.findAll();

      res.status(200).json(seats);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async createSeat(req, res) {
    try {
      const roleAccess = req.userData.role;
      if (roleAccess === "0") {
        const idEvent = +req.params.id;
        const { Num_Seat, Seat_Code } = req.body;
        const number_seat = generetSeat(Num_Seat, Seat_Code);

        let seats = await number_seat.forEach((e) => {
          seat.create({
            numSeat: e,
            eventId: idEvent,
          });
        });
        res.status(200).json(seats);
      } else {
        res
          .status(403)
          .json({ message: "Access denied: Admin privilege required!" });
      }
    } catch (err) {
      // res.status(500).json(err);
      console.log(err);
    }
  }

  static async updateSeat(req, res) {}

  static async deleteSeat(req, res) {}
}

module.exports = SeatController;
