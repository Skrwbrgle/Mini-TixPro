const userRoutes = require("express").Router();
const {
  isAdmin,
  isUser,
  authentication,
} = require("../middlewares/authentication");
const { UserController } = require("../controllers");

userRoutes.get("/", UserController.getAllUser);
userRoutes.get("/login", UserController.login);
userRoutes.post("/register", authentication, UserController.register);

userRoutes.get("/dashboard", (req, res) => {});

userRoutes.put("/update/:id", isAdmin, (req, res) => {});
userRoutes.delete("/delete/:id", isAdmin, (req, res) => {});

userRoutes.get("/logout", (req, res) => {});

module.exports = userRoutes;
