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
      const { username, email, password, identification } = req.body;
      const newUser = await user.create({
        username,
        email,
        password,
        identification,
      });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const emailFound = await user.findOne({
        where: { email },
      });

      if (emailFound) {
        if (decrypt(password, emailFound.password)) {
          const access_token = generateToken(emailFound);
          res.status(200).json({ access_token });
        } else {
          res.status(401).json({
            message: "Wrong password!",
          });
        }
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    } catch (err) {
      // res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = UserController;
