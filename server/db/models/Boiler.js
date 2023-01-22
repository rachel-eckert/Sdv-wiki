const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("boilerBundle", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bundle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});
