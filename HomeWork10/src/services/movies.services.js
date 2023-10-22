const { moviesRepositories } = require('../repositories');

async function getMovies({ page = 1, limit = 10 }) {
    if (page < 1 || limit < 1) {
        return Promise.reject(new Error('Invalid page and/or limit'));
    }
    const movies = await moviesRepositories.getMovies({
        page,
        limit
    });

    if (!movies.length) {
        return Promise.reject(new Error('Movies not found'));
    }

    return movies;
}

async function getMovieById(id) {
    if (!id) {
        return Promise.reject(new Error('Invalid id'));
    }
    const movie = await moviesRepositories.getMovieById(id);

    if (!movie) {
        return Promise.reject(new Error('Movie not found'));
    }

    return movie;
}

async function addMovie({ title, genres, year, photo }) {
    if (!title || !genres || !year) {
        return Promise.reject(new Error("Invalid arguments"));
    }

    const movie = await moviesRepositories.addMovie({
        title,
        genres,
        year,
        photo
    });

    return movie;
}

async function updateMovie(id, { title, genres, year, photo }) {
    if (!id) {
        return Promise.reject(new Error('Invalid Id'));
    }

    await moviesRepositories.updateMovie(id, {
        title, genres, year, photo
    });

    const movie = await moviesRepositories.getMovieById(id);

    return movie;
}

async function deleteMovie(id) {
    if (!id) {
        return Promise.reject(new Error('Invalid Id'));
    }

    const movie = await moviesRepositories.deleteMovie(id);

    return movie;
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
};