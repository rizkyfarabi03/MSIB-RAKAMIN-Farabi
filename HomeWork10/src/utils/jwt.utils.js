const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

const generateToken = (email, role) => {
    const token = jwt.sign(
        {
            email,
            role
        },
        SECRET_KEY,
        {
            expiresIn: '6h',
            algorithm: 'HS256'
        }
    );
    return token;
};

module.exports = { generateToken };