const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // Level log minimal
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(), // Menampilkan log ke konsol
    new winston.transports.File({ filename: 'app.log' }), // Menyimpan log ke berkas
  ],
});

module.exports = logger;
