const Sequelize = require("sequelize");
const db = new Sequelize("Restful", "postgres", "postgres", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;