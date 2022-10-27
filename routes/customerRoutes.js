const express = require('express');
const customerController = require('../controllers/customerController');
const userHandler = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(customerController.getAllCustomers)
  .post(customerController.createCustomer);

router
  .route('/:id')
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

  router
    .route('/auth/register')
    .post(userHandler.register);

router
    .route('/auth/sign_in')
    .post(userHandler.sign_in);

module.exports = router;
