const chalk = require("chalk");
const Sequelize = require("sequelize");
const pkg = require("../../package.json");
const config = {
  logging: false,
};
const dbName = pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");
console.log(chalk.yellow(`Opening database connection to ${dbName}`));
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  config
);

module.exports = db;
