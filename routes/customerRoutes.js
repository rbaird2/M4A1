const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router
  .route('/')
  .get(customerController.getAllcustomers)
  .post(customerController.createcustomer);

router
  .route('/:id')
  .get(customerController.getcustomer)
  .patch(customerController.updatecustomer)
  .delete(customerController.deletecustomer);

module.exports = router;
