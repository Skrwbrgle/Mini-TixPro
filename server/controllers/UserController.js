const { user } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static async getAllUser(req, res) {
    try {
      const users = await user.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(e);
    }
  }

  static async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = await user.create({
        username,
        email,
        password,
      });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await user.findOne({
        where: {
          email,
          password,
        },
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
