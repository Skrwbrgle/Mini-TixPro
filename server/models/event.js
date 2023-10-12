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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
          message: "Title Event cannot be empty",
        },
      },
      event_date: {
        type: DataTypes.DATE,
        allowNull: false,
        notEmpty: {
          message: "Event Date cannot be empty",
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
          message: "Address cannot be empty",
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: {
          message: "Price cannot be empty",
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
