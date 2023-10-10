const userRoutes = require("express").Router();

userRoutes.get("/", (req, res) => {});
userRoutes.get("/login", (req, res) => {});
userRoutes.post("/register", (req, res) => {});
userRoutes.get("/dashboard", (req, res) => {});

userRoutes.put("/update/:id", (req, res) => {});
userRoutes.delete("/delete/:id", (req, res) => {});

userRoutes.get("/logout", (req, res) => {});

module.exports = userRoutes;
