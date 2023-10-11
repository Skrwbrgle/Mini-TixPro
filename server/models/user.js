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
        notEmpty: {
          message: "username cannot be empty",
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
          message: "email cannot be empty!",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
          message: "password cannot be empty!",
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
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        notEmpty: {
          message: "identification is required!",
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: {
          message: "age is required!",
        },
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["0", "1"], //0 = male, 1 = female
      },
      role: {
        type: DataTypes.ENUM,
        values: ["0", "1"], //0 = admin, 1 = user
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = encrypt(user.password);
          user.image =
            user.image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
          user.no_telp = user.no_telp || "";
          user.address = user.address || "";
          // user.identification = user.identification || 0;
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
