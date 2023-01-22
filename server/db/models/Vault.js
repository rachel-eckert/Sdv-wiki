const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("vaultBundle", {
  cost: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bundle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
