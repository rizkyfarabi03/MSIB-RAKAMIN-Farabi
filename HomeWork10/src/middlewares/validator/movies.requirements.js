const { body, param, query } = require('express-validator');

const requirements = {
    getMovies: [
        query("page").isInt({ min: 1 }).optional({ nullable: true }),
        query("limit").isInt({ min: 10, max: 50 }).optional({ nullable: true }),
    ],
    getMovieById: [
        param('id').isInt({ min: 1 })
    ],
    createMovie: [
        body('title').notEmpty().isString().isLength({ min: 2 }),
        body('genres').notEmpty().isString().isLength({ min: 3 }),
        body('year').notEmpty().isString().isLength({ min: 4 })
    ],
    updateMovie: [
        param('id').optional().isInt({ min: 1 }),
        body('title').optional().isString().isLength({ min: 2 }),
        body('genres').optional().isString().isLength({ min: 3 }),
        body('year').optional().isString().isLength({ min: 4 })
    ],
    deleteMovie: [
        param('id').isInt({ min: 1 })
    ]
};

module.exports = requirements;