const userRoutes = require("express").Router();
const {
  isAdmin,
  authentication,
  isUser,
} = require("../middlewares/authentication");
const { UserController } = require("../controllers");
const {} = require("../helpers/bcrypt");

userRoutes.get("/", UserController.getAllUser);
userRoutes.post("/login", UserController.login);
userRoutes.post("/register", UserController.register);

userRoutes.get("/dashboard", authentication, UserController.dashboard);

userRoutes.put("/update/:id", isAdmin, (req, res) => {});
userRoutes.delete("/delete/:id", isAdmin, (req, res) => {});

userRoutes.get("/logout", (req, res) => {});

module.exports = userRoutes;
