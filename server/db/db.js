const chalk = require("chalk");
const Sequelize = require("sequelize");
const pkg = require("../../package.json");
const config = {
  logging: false,
};
const dbName = process.env.NODE_ENV === "test" ? `${pkg.name}-test` : pkg.name;
console.log(chalk.yellow(`Opening database connection to ${dbName}`));

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  config
);

module.exports = db;
