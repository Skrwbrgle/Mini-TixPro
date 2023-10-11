const { event, seat, booking, payment } = require("../models");

class EventController {
  static async getEvents(req, res) {
    try {
      //get all events
      let events = await event.findAll();

      res.status(200).json(events);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async getOneEvent(req, res) {
    try {
      const roleAccess = req.userData.role;
      const idEvent = +req.params.id;

      if (roleAccess === "0" || roleAccess === "1") {
        //get one event with seat
        let resEvent = await event.findOne({
          where: {
            id: +idEvent,
          },
          include: {
            model: seat,
            attributes: ["numSeat", "status"],
            where: {
              eventId: +idEvent,
            },
          },
        });

        res.status(200).json(resEvent);
      } else {
        res.status(403).json({ message: "Create Account First!" });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async createEvent(req, res) {
    try {
      const roleAccess = req.userData.role;

      if (roleAccess === "0") {
        const { title, event_date, address, price, image } = req.body;
        let resEvent = await event.create({
          title,
          event_date,
          address,
          price,
          image,
        });

        res.status(200).json(resEvent);
      } else {
        res
          .status(403)
          .json({ message: "Access denied: Admin privilege required!" });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async updateEvent(req, res) {
    try {
      const idEvent = +req.params.id;
      const { title, event_date, address, price, image } = req.body;
      let resEdit = await event.update(
        {
          title,
          event_date,
          address,
          price,
          image,
        },
        {
          where: { id: idEvent },
        }
      );

      resEdit
        ? res.status(200).json({
            message: `Event updated successfully`,
          })
        : res.status(404).json({
            message: `Can not update event with ${idEvent}`,
          });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async deleteEvent(req, res) {
    try {
      const idEvent = +req.params.id;
      let deleteEvent = await event.destroy({ where: { id: idEvent } });
      let deleteSeat = await seat.destroy({ where: { eventId: idEvent } });
      let deleteBooking = await booking.destroy({
        where: { eventId: idEvent },
      });
      let deletePayment = await payment.destroy({
        where: { eventId: idEvent },
      });

      deleteEvent
        ? res.status(200).json({ message: `Event deleted successfully` })
        : res.status(404).json({ message: `Event with ${idEvent} not found` });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = EventController;
