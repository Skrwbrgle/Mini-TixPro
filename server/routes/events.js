const eventRoutes = require("express").Router();
const { EventController } = require("../controllers");
const { authentication } = require("../middlewares/authentication");

eventRoutes.get("/", EventController.getEvents);
eventRoutes.get("/:id", authentication, EventController.getOneEvent);
eventRoutes.post("/create", authentication, EventController.createEvent);
eventRoutes.put("/edit/:id", authentication, EventController.updateEvent);
eventRoutes.delete("/delete/:id", authentication, EventController.deleteEvent);

module.exports = eventRoutes;
