const userRoutes = require("express").Router();
const { authentication } = require("../middlewares/authentication");
const { UserController } = require("../controllers");
const {} = require("../helpers/bcrypt");

userRoutes.get("/", UserController.getAllUser);
userRoutes.post("/login", UserController.login);
userRoutes.post("/register", UserController.register);

userRoutes.get("/dashboard", authentication, UserController.dashboard);

userRoutes.put("/update/:id", (req, res) => {});
userRoutes.delete("/delete/:id", (req, res) => {});

userRoutes.get("/logout", (req, res) => {});

module.exports = userRoutes;
