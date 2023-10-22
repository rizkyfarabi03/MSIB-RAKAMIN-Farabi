const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed: Token not provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Authentication failed: Invalid token' });
        }
        next();
    });
};

module.exports = authenticateToken;