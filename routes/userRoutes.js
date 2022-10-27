'use strict';

const express = require('express');
const userHandler = require('../controllers/userController');

const router = express.Router();

router
    .route('/auth/register')
    .post(userHandler.register);

router
    .route('/auth/sign_in')
    .post(userHandler.sign_in);

module.exports = router;
