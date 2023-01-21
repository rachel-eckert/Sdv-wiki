const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("character", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  bachelor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  bachelorette: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  bestGift: {
    type: Sequelize.STRING,
  },
  birthday: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
