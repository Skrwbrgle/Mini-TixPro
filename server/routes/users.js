const userRoutes = require("express").Router();

userRoutes.get("/", (req, res) => {});
userRoutes.get("/login", (req, res) => {});
userRoutes.post("/register", (req, res) => {});

module.exports = userRoutes;
