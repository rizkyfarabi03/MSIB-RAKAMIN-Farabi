const bcrypt = require('bcrypt');
const { usersRepositories } = require('../repositories');

async function getUsers({ page = 1, limit = 10 }) {
    if (page < 1 || limit < 1) {
        return Promise.reject(new Error('Invalid page and/or limit'));
    }

    const users = await usersRepositories.getUsers({
        page,
        limit
    });

    if (!users.length) {
        return Promise.reject(new Error('Users not found'));
    }

    return users;
}

async function getUserById(id) {
    if (!id) {
        return Promise.reject(new Error('Invalid Id'));
    }

    const user = await usersRepositories.getUserById(id);

    if (!user) {
        return Promise.reject(new Error('User not found'));
    }

    return user;
}

async function updateUser(id, { email, gender, password, role }) {
    if (!id) {
        return Promise.reject(new Error('Invalid Id'));
    }

    if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);

        await usersRepositories.updateUser(id, {
            email,
            gender,
            password: hashedPassword,
            role
        });
    } else {
        await usersRepositories.updateUser(id, {
            email,
            gender,
            password,
            role
        });
    }

    const user = await usersRepositories.getUserById(id);

    if (!user) {
        return Promise.reject(new Error('User not found'));
    }

    return user;
}

async function deleteUser(id) {
    if (!id) {
        return Promise.reject(new Error('Invalid Id'));
    }

    const user = await usersRepositories.deleteUser(id);

    return user;
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};