const { Router } = require('express');
const { authControllers } = require('../controllers');

const router = Router();

router
    .route('/register')
    .get(authControllers.registerUserForm);

router
    .route('/login')
    .get(authControllers.loginUserForm);

module.exports = router;