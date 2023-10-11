const userRoutes = require("express").Router();
const { authentication } = require("../middlewares/authentication");
const { UserController } = require("../controllers");

userRoutes.post("/login", UserController.login);
userRoutes.post("/register", UserController.register);
//Dashboard
userRoutes.get("/dashboard", authentication, UserController.dashboard);

//Untuk Admin
userRoutes.get("/", authentication, UserController.getUser);
userRoutes.delete("/delete/:id", authentication, UserController.deleteUser);

userRoutes.get("/logout", UserController.logout);

module.exports = userRoutes;
