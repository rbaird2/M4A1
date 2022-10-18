//** ---Code START ---

const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    id: {
        type: Number,
        required: [true, 'A loan must have an id'],
        unique: true,
    },
    customerName: {
        type: String,
        required: [true, 'A customer must have a name'],
        trim: true,
        maxlength: [40, 'A customer name must have less or equal to 40 characters'],
        minlength: [4, 'A customer name must have more or equal to 4 characters']
     
    },
    phoneNumber:{
        type: String,
        trim: true,
        maxlength: [13, 'A phone number must have less or equal to 40 characters'],
        minlength: [7, 'A phone number must have more or equal to 10 characters']
    },
    address: {
        type: String,
        required: [true, 'A customer must have an address'],
        trim: true,
        maxlength: [40, 'An address must have less or equal to 40 characters'],
        minlength: [10, 'An address must have more or equal to 10 characters']
    },
    loanAmount: {
        type: Number,
        required: [true, 'A loan must have a loan amount'],
        max: [600000, 'A loan must be less than or equal to $600,000'],
        min: [100, 'A loan must be greater than or equal to $100']
    },
    interest: {
        type: Number,
        required: [true, 'A loan must charge interest'],
        max: [.30, 'Interest must be less than or equal to 30%'],
        min: [.02, 'Interest must be greater than or equal to 2%']
    },
    loanTermYears: {
        type: Number,
        required: [true, 'A loan must have a term'],
        max: [30, 'A loan term must be less than or equal to 30 years'],
        min: [1, 'A loan term must be greater than or equal to 1 year']
    },
    loanType: {
        type: String,
        required: [true, 'A loan must have a loan type'],
        trim: true,
        maxlength: [40, 'A loan type must have less than or equal to 40 characters'],
        minlength: [4, 'A loan type must have greater than or equal to 4 characters']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [40, 'A description must have less than or equal to 40 characters']
    }
});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
//** code  END