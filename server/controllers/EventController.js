const { event, seat, booking, payment } = require("../models");

class EventController {
  static async getEvents(req, res) {
    try {
      const idEvent = +req.params.id;
      //get all events
      let events = await event.findAll();
      //get one event with seat
      let event = await event.findByPk({
        where: {
          id: idEvent,
        },
        include: {
          model: seat,
          attributes: ["numSeat", "status"],
        },
      });

      res.status(200).json(events);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async createEvent(req, res) {
    try {
      const { title, event_date, address, price, image } = req.body;
      let resEvent = await event.create({
        title,
        event_date,
        address,
        price,
        image,
      });

      const { numSeat, status } = req.body;
      let seats = await seat.create({
        numSeat,
        status,
        eventId: +resEvent.id,
      });

      res.status(200).json(result);
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
      let deleteEvent = await event.delete({ where: { id: idEvent } });
      let deleteSeat = await seat.delete({ where: { eventId: idEvent } });
      let deleteBooking = await booking.delete({ where: { eventId: idEvent } });
      let deletePayment = await payment.delete({ where: { eventId: idEvent } });

      deleteEvent
        ? res.status(200).json({ message: `Event deleted successfully` })
        : res.status(404).json({ message: `Event with ${idEvent} not found` });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = EventController;