const Sequelize = require("sequelize");
const db = require("../config/postgresql");

// title, generes, year, photo
let todo = db.define(
  "todo",
  {
    title: Sequelize.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = todo;