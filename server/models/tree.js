const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Tree = sequelize.define(
  "Tree",
  {
    // Model attributes are defined here
    user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = Tree