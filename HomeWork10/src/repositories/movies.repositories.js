const fs = require('fs');
const path = require('path');
const { Movie } = require('../models');

async function getMovies({ page, limit }) {
    const offset = (page - 1) * limit;
    return Movie.findAll({
        limit: limit,
        offset: offset
    });
}

async function getMovieById(id) {
    return Movie.findByPk(id, {
        attributes: ['id', 'title', 'genres', 'year', 'photo'],
    });
}

async function addMovie({ title, genres, year, photo }) {
    const currId = await Movie.max('id') + 1;
    return Movie.create({
        id: currId,
        title,
        genres,
        year,
        photo
    });
}

async function updateMovie(id, { title, genres, year, photo }) {
    return Movie.update(
        {
            title,
            genres,
            year,
            photo
        },
        {
            where: {
                id,
            }
        }
    );
}

async function deleteMovie(id) {
    try {
        const movie = await Movie.findByPk(id, {
            attributes: ['photo'],
        });

        if (!movie) {
            throw new Error('Movie not found');
        }

        const photoPath = `C:\\Users\\aswan\\Documents\\Rakamin\\HomeWork\\HW10\\uploads\\${movie.photo}`;

        fs.unlink(photoPath, (err) => {
            if (err) {
                console.error('Gagal menghapus file', err);
            } else {
                console.log('File berhasil dihapus');
            }
        });

        await Movie.destroy({
            where: {
                id
            }
        });

        return 'Movie deleted successfully';
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
};