const { User } = require('../models');

async function getUsers({ page, limit }) {
    const offset = (page - 1) * limit;
    return User.findAll({
        limit: limit,
        offset: offset
    });
}

async function getUserById(id) {
    return User.findByPk(id);
}

async function updateUser(id, { email, gender, password, role }) {
    return User.update(
        {
            email,
            gender,
            password,
            role
        },
        {
            where: {
                id,
            }
        }
    );
}

async function deleteUser(id) {
    await User.destroy({
        where: {
            id
        }
    });
    return 'User successfully deleted';
}

async function getUserByEmail(email) {
    return User.findOne({
        attributes: ["email", "password", "role"],
        where: {
            email
        }
    });
}

async function createUser({ email, gender, password, role }) {
    const currId = await User.max('id') + 1;
    return User.create({
        id: currId,
        email,
        gender,
        password,
        role
    });
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
    createUser
};