const { Router } = require("express");
const { usersControllers } = require('../controllers');
const { validator } = require('../middlewares');
const authenticateToken = require("../middlewares/authJwt");

const router = Router();
const { validate, requirements } = validator;

router
    .route('/')
    .get(authenticateToken, [validate(requirements.getUsers)], usersControllers.getUsers);

router
    .route('/:id')
    .get(authenticateToken, [validate(requirements.getUserById)], usersControllers.getUserById);

router
    .route('/:id')
    .put(authenticateToken, [validate(requirements.updateUser)], usersControllers.updateUser);

router
    .route('/:id')
    .delete(authenticateToken, [validate(requirements.deleteUser)], usersControllers.deleteUser);

module.exports = router;