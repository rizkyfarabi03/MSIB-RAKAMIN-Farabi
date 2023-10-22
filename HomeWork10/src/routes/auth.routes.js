const { Router } = require('express');
const { authControllers } = require('../controllers');
const { validator } = require('../middlewares');

const router = Router();
const { validate, requirements } = validator;

router
    .route('/register')
    .post([validate(requirements.registerUser)], authControllers.registerUser);

router
    .route('/login')
    .post([validate(requirements.loginUser)], authControllers.loginUser);

module.exports = router;