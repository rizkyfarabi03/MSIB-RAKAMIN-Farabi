const bcrypt = require('bcrypt');
const { usersRepositories } = require('../repositories');
const { authServices } = require('../services');
const jwtUtil = require('../utils/jwt.util');

async function registerUserForm(req, res, next) {
    try {
        res.render('register', {
            title: 'Register',
            layout: 'layouts/form-layouts'
        });
    } catch (err) {
        next(err);
    }
}

async function loginUserForm(req, res, next) {
    try {
        res.render('login', {
            title: 'Login',
            layout: 'layouts/form-layouts'
        });
    } catch (err) {
        next(err);
    }
}

async function registerUser(req, res, next) {
    try {
        const { email, gender, password, role } = req.body;
        const result = await authServices.registerUser({
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

async function loginUser(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await usersRepositories.getUserByEmail(email);
        console.log(user);
        if (!user) {
            return res.json({
                status: 'Error',
                message: 'Invalid Email or Password'
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.json({
                status: 'Error',
                message: 'Invalid Email or Password'
            });
        }

        const token = jwtUtil.generateToken(user.email, user.role);

        res.json({
            status: 'Success',
            token: token
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    registerUserForm,
    loginUserForm,
    registerUser,
    loginUser
};