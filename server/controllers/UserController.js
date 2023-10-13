const { user, event } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { encrypt } = require("../helpers/bcrypt");

class UserController {
  static async getUser(req, res) {
    try {
      const role = req.userData.role;
      const users = await user.findAll();
      role === "0"
        ? res.status(200).json(users)
        : res.status(403).json({
            message: "Access denied: Admin privilege required!",
          });
    } catch (err) {
      res.status(500).json(err);
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
      res.status(500).json(err);
    }
  }

  static async dashboard(req, res) {
    try {
      const role = req.userData.role;

      if (role === "0") {
        res.status(200).json({ message: `admin` });
      } else if (role === "1") {
        res.status(200).json({ message: `user` });
      } else if (role === "2") {
        res.status(200).json({ message: `guest` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteUserByAdmin(req, res) {
    try {
      const role = req.userData.role;
      const id = +req.params.id;

      const getUser = await user.findByPk(id);

      if (role === "0") {
        const deletedUser = await user.destroy({
          where: { id },
        });
        deletedUser === 1
          ? res.status(200).json({
              message: `${getUser.username} deleted successfully!`,
            })
          : res
              .status(403)
              .json({ message: "User not found or already deleted" });
      } else {
        res
          .status(403)
          .json({ message: "Access denied: Admin privilege required!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteUserByUser(req, res) {
    try {
      const role = req.userData.role;
      if (role === "1") {
        const { role, id } = req.userData;
        const getUser = await user.findByPk(+id);

        const deleteAcc = await user.destroy({
          where: {
            id,
            role,
          },
        });

        deleteAcc === 1
          ? res
              .status(200)
              .json({ message: `${getUser.username} deleted successfully` })
          : res.status(403).json({ message: `Cant not delete account` });
      } else {
        res.status(403).json({ message: "Access denied" });
      }
    } catch (err) {
      res.status(500).json(err);
      // res.json(err);
    }
  }

  static async updateUser(req, res) {
    try {
      const idUser = +req.params.id;
      const { role, id } = req.userData;
      const {
        username,
        email,
        password,
        identification,
        no_telp,
        address,
        age,
        gender,
        role_user,
      } = req.body;

      if (role === "0") {
        const newUser = await user.update(
          {
            username,
            email,
            password: encrypt(password),
            no_telp,
            address,
            identification,
            age,
            gender,
            role: role_user,
          },
          {
            where: { id: idUser },
          }
        );

        newUser[0] === 1
          ? res
              .status(200)
              .json({ message: `User ${username} has been updated!` })
          : res.status(400).json({ message: `Cannot update user ${username}` });
      } else if (role === "1") {
        const newUser = await user.update(
          {
            username,
            no_telp,
            address,
            age,
            gender,
          },
          {
            where: { id },
          }
        );

        console.log("A-3");

        newUser[0] === 1
          ? res
              .status(200)
              .json({ message: `User ${username} has been updated!` })
          : res.status(400).json({ message: `Cannot update user ${username}` });
      } else {
        res.status(403).json({ message: `Access denied` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
