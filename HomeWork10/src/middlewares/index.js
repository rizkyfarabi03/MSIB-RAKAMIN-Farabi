const errorHandler = require('./errorHandler.middlewares');
const morganMiddlerware = require('./morgan.middlewares');
const multerMiddleware = require('./multer.middlewares');
const validator = require('./validator');

module.exports = {
    errorHandler,
    morganMiddlerware,
    multerMiddleware,
    validator
};