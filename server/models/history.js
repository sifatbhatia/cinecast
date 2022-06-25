const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const History = sequelize.define("History", {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = History;
