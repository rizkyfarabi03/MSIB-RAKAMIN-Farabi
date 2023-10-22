const { usersServices } = require('../services');

async function getUsers(req, res, next) {
    try {
        const result = await usersServices.getUsers(req.query);
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function getUserById(req, res, next) {
    try {
        const id = req.params.id;
        const result = await usersServices.getUserById(id);
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function updateUser(req, res, next) {
    try {
        const id = req.params.id;
        const { email, gender, password, role } = req.body;

        const result = await usersServices.updateUser(id, {
            email,
            gender,
            password,
            role
        });
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function deleteUser(req, res, next) {
    try {
        const id = req.params.id;
        const result = await usersServices.deleteUser(id);
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};