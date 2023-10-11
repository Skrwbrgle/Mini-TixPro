const eventRoutes = require("express").Router();
const { EventController } = require("../controllers");
const { isAdmin } = require("../middlewares/authentication");

eventRoutes.get("/", EventController.getEvents);
eventRoutes.get("/:id", EventController.getOneEvent);
// eventRoutes.get("/:id", (req, res) => {});
eventRoutes.post("/create", EventController.createEvent);
eventRoutes.put("/edit/:id", EventController.updateEvent);
eventRoutes.delete("/delete/:id", EventController.deleteEvent);

module.exports = eventRoutes;
