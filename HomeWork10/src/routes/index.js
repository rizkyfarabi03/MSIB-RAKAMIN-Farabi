const { Router } = require('express');
const moviesRoutes = require('./movies.routes');
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const formRoutes = require('./form.routes');

const router = Router();

router.use('/form', formRoutes);
router.use('/movies', moviesRoutes);
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);

module.exports = router;