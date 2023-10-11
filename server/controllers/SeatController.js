const { seat } = require("../models");

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
      const { numSeat, status, eventId } = req.body;
      let seats = await seat.create({
        numSeat,
        status,
        eventId,
      });

      res.status(200).json(seats);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async updateSeat(req, res) {}

  static async deleteSeat(req, res) {}
}

module.exports = SeatController;
