const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');

const Movie = sequelize.define(
    "Movie",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        tableName: 'movies',
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = Movie;