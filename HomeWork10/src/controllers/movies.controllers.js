const { moviesServices } = require('../services');

async function getMovies(req, res, next) {
    try {
        const result = await moviesServices.getMovies(req.query);
        res.render('movies', {
            title: 'Data Movie',
            layout: 'layouts/main-layouts',
            result
        });
        // res.json({
        //     status: 'Success',
        //     data: result
        // });
    } catch (err) {
        next(err);
    }
}

async function getMovieById(req, res, next) {
    try {
        const id = req.params.id;
        const result = await moviesServices.getMovieById(id);
        res.render('detail-movie', {
            title: 'Detail Movie',
            layout: 'layouts/main-layouts',
            result
        });
        // res.json({
        //     status: 'Success',
        //     data: result
        // });
    } catch (err) {
        next(err);
    }
}

async function addMovieForm(req, res, next) {
    try {
        res.render('add-movie', {
            title: 'Form Tambah Data Movie',
            layout: 'layouts/main-layouts'
        });
    } catch (err) {
        next(err);
    }
}

async function addMovie(req, res, next) {
    try {
        const { title, genres, year } = req.body;
        let photo = 'default_photo.jpg';
        if (req.file) {
            photo = req.file.filename;
        }
        await moviesServices.addMovie({ title, genres, year, photo });
        res.redirect('/api/v1/movies');
        // res.json({
        //     status: 'Success',
        //     data: result
        // });
    } catch (err) {
        next(err);
    }
}

async function editMovieForm(req, res, next) {
    try {
        const id = req.params.id;
        const result = await moviesServices.getMovieById(id);
        res.render('edit-movie', {
            title: 'Form Edit Data Movie',
            layout: 'layouts/main-layouts',
            result
        });
    } catch (err) {
        next(err);
    }
}

async function updateMovie(req, res, next) {
    try {
        const id = req.params.id;
        const { title, genres, year } = req.body;
        let photo = 'default_photo.jpg';

        if (req.file) {
            photo = req.file.filename;
        } else {
            const existingMovie = await moviesServices.getMovieById(id);
            if (existingMovie) {
                photo = existingMovie.photo;
            }
        }

        await moviesServices.updateMovie(id, { title, genres, year, photo });
        res.redirect('/api/v1/movies');
        // res.json({
        //     status: 'Success',
        //     data: result
        // });
    } catch (err) {
        next(err);
    }
}

async function deleteMovie(req, res, next) {
    try {
        const id = req.params.id;

        const result = await moviesServices.deleteMovie(id);
        res.redirect('/api/v1/movies');
        // res.json({
        //     status: 'Success',
        //     data: result
        // });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getMovies,
    getMovieById,
    addMovieForm,
    addMovie,
    editMovieForm,
    updateMovie,
    deleteMovie
};