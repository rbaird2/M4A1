'use strict';

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
    .route('/auth/register')
    .post(userController.register);

router
    .route('/auth/sign_in')
    .post(userController.sign_in);

// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
