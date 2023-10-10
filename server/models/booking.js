"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.event);
      booking.belongsTo(models.user);
      booking.belongsTo(models.payment);
      booking.belongsTo(models.seat);
    }
  }
  booking.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      paymentId: DataTypes.INTEGER,
      seatId: DataTypes.INTEGER,
      barcode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
