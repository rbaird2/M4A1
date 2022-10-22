//** ---Code START ---

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema( //for MongoDB schema
  {
    customer_id: {
        type: Number,
        required: [true, 'A customer must have an id'],
        maxlength: [5, 'A customer id must have 5 digits'],
        minlength: [5, 'A customer id must have 5 digits'],
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
    created_date    : { type: Date },    //set up for autopopulation
    modified_date    : { type: Date }
});

customerSchema.pre('save', function(next){  // from Stack Overflow "add created_at and updated_at fields to mongoose schemas"
    now = new Date();
    this.modified_date = now;
    if ( !this.created_date ) {
      this.created_date = now;
    }
    next();
  });
const Customer = mongoose.model('customer', customerSchema);



module.exports = Customer;
//** code  END