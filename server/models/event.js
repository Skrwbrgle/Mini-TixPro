"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      event.hasMany(models.seat);
      event.hasMany(models.payment);
      event.belongsToMany(models.user, { through: models.booking });
    }
  }
  event.init(
    {
      title: DataTypes.STRING,
      event_date: DataTypes.DATE,
      address: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
