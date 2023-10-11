const eventRoutes = require("express").Router();
const { EventController } = require("../controllers");
const { isAdmin } = require("../middlewares/authentication");

if (isAdmin) {
  eventRoutes.get("/", EventController.getEvents);
  // eventRoutes.get("/:id", (req, res) => {});
  eventRoutes.post("/create", EventController.createEvent);
  eventRoutes.put("/edit/:id", EventController.updateEvent);
  eventRoutes.delete("/delete/:id", EventController.deleteEvent);
} else {
  res.status(403).json({
    message: `You are not Admin!`,
  });
}

module.exports = eventRoutes;
