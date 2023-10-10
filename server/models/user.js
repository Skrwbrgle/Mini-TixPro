"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      no_telp: DataTypes.STRING,
      address: DataTypes.STRING,
      identification: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      age: DataTypes.INTEGER,
      gender: DataTypes.ENUM,
      role: DataTypes.ENUM,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
