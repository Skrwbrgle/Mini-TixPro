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
      payment.belongsTo(models.seat);
      payment.hasMany(models.booking);
    }
  }
  payment.init(
    {
      total_ticket: {
        type: DataTypes.INTEGER,
        notEmpty: {
          message: "Total Ticket cannot be empty",
        },
      },
      status: {
        type: DataTypes.ENUM,
        values: ["approved", "rejected", "pending"],
        defaultValue: "pending",
      },
      midtransToken: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      seatId: DataTypes.STRING,
      orderId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
