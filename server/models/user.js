"use strict";
const { Model } = require("sequelize");
const { encrypt } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.payment);
      user.belongsToMany(models.event, { through: models.booking });
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "username cannot be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "email cannot be empty!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "password cannot be empty!",
          },
        },
      },
      no_telp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identification: {
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "identification is required!",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["0", "1"], //0 = male, 1 = female
      },
      role: {
        type: DataTypes.ENUM,
        values: ["0", "1"], //0 = admin, 1 = user
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = encrypt(user.password);
          user.no_telp = user.no_telp || "";
          user.address = user.address || "";
          user.age = user.age || 0;
          user.gender = user.gender || "0";
          user.role = user.role || "1";
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
