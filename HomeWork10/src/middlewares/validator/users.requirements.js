const { body, param, query } = require('express-validator');

const requirements = {
    getUsers: [
        query("page").isInt({ min: 1 }).optional({ nullable: true }),
        query("limit").isInt({ min: 10, max: 50 }).optional({ nullable: true }),
    ],
    getUserById: [
        param("id").isInt({ min: 1 })
    ],
    updateUser: [
        param("id").isInt({ min: 1 }),
        body("email").isEmail(),
        body("gender").optional().isIn(["Male", "Female", "male", "female"]),
        body("password").optional().isLength({ min: 6 }),
        body("role").optional().isString()
    ],
    deleteUser: [
        param("id").isInt({ min: 1 })
    ],
    registerUser: [
        body("email").notEmpty().isEmail(),
        body("gender").notEmpty().isIn(["Male", "Female", "male", "female"]),
        body("password").notEmpty().isLength({ min: 6 }),
        body("role").notEmpty().isString()
    ],
    loginUser: [
        body("email").notEmpty().isEmail(),
        body("password").notEmpty().isLength({ min: 6 }),
    ]
};

module.exports = requirements;