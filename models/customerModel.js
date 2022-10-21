//** ---Code START ---

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    id: {
        type: Number,
        required: [true, 'A customer must have an id'],
        unique: true,
    },
    first_name: {
        type: String,
        required: [true, 'A customer must have a first name'],
        trim: true,
        maxlength: [40, 'A customer first name must have less or equal to 40 characters'],     
    },
    middle_name: {
        type: String,
        required: [false],
        trim: true,
        maxlength: [40, 'A customer middle name must have less or equal to 40 characters'],     
    },
    last_name: {
        type: String,
        required: [true, 'A customer must have a last name'],
        trim: true,
        maxlength: [40, 'A customer last name must have less or equal to 40 characters'],     
    },
    date_of_birth:{
        type: String,
        required: [true, 'A customer must have a date of birth'],
        trim: true,
        maxlength: [20, 'A date of birth must have less or equal to 20 characters'],
        minlength: [10, 'A date of birth must have more or equal to 10 characters'],
    },
    gender: {
        type: String,
        required: [false],
        trim: true,
        maxlength: [20, 'A customer gender must have less or equal to 20 characters'],  
    },
    created_at    : { type: Date },
    updated_at    : { type: Date }
});

customerSchema.pre('save', function(next){  // from Stack Overflow "add created_at and updated_at fields to mongoose schemas"
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });
const Customer = mongoose.model('customer', customerSchema);



module.exports = Customer;
//** code  END