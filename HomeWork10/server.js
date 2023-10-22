const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
const { API } = require('./config');
const routes = require('./src/routes');
const { errorHandler, morganMiddlerware } = require('./middlewares');

function createServer() {
    const app = express();

    app.use(methodOverride('_method'));
    app.use(expressLayouts);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static('uploads'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    // app.use(cookieParser());
    app.use(morganMiddlerware);
    app.use(`/${API}`, routes);
    app.use(errorHandler);

    return app;
}

module.exports = createServer;