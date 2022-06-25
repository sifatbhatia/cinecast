const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const List = sequelize.define("List", {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weather: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = List;
