"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      seat.belongsTo(models.event);
      seat.hasOne(models.payment);
    }
  }
  seat.init(
    {
      numSeat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "Number Seat cannot be empty",
          },
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "seat",
    }
  );
  return seat;
};
