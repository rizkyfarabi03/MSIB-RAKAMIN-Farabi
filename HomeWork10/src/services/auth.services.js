const bcrypt = require('bcrypt');
const { usersRepositories } = require('../repositories');

async function registerUser({ email, gender, password, role }) {
    const existingUser = await usersRepositories.getUserByEmail(email);

    if (existingUser.length === 1) {
        return Promise.reject(new Error('User already taken'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await usersRepositories.createUser({
        email,
        gender,
        password: hashedPassword,
        role
    });

    return user;
}

module.exports = {
    registerUser,
};