"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.belongsTo(models.user);
      payment.belongsTo(models.event);
      payment.hasMany(models.booking);
    }
  }
  payment.init(
    {
      total_ticket: DataTypes.INTEGER,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
