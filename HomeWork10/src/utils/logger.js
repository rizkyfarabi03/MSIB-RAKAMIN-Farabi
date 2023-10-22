const { Sequelize } = require('sequelize');
const { DB_NAME, DB_USER, DB_PASSWORD } = require('../config');
const logger = require('./logger');

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
    host: 'localhost',
    dialect: 'postgres',
    logging: (sql) => logger.debug(sql)
});

module.exports = sequelize;