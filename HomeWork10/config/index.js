require('dotenv').config();

const config = {
    PORT: parseInt(process.env.PORT) || 3000,
    API: process.env.API || "api/v1",
    IS_DEVELOPMENT: ["development", "dev", "local"].includes(process.env.SERVER),
    SECRET_KEY: process.env.SECRET_KEY,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD
};

module.exports = config;
