//** ---Code START ---

const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema( //for MongoDB schema
  {
    ledger_id: {
        type: Number,
        required: [true, 'A ledger entry must have an id'],
        unique: true,
    },
    payment_amount: {
        type: Number,
        required: [true, 'A ledger entry must have a payment amount'],
    },
     interest: {
        type: Number,
        required: [true, 'A ledger entry must show interest'],
    },
    principal: {
        type: Number,
        required: [true, 'A ledger entry must show principal'],
    },
    loan_number:{
        type: Number,
        required: [true, 'A ledger entry must have a loan number'],
        maxlength: [5, 'A loan number must have 5 digits'],
        minlength: [5, 'A loan number must have 5 digits']
    },
    created_date: { type: Date },    //set up for autopopulation
    modified_date: { type: Date }
});
ledgerSchema.pre('save', function(next){  // from Stack Overflow "add created_at and updated_at fields to mongoose schemas"
    now = Date();
    this.modified_date = now;
    if ( !this.created_date ) {
      this.created_date = now;
    }
    next();
  });
  ledgerSchema.pre('findOneAndUpdate', function(next){  // from Stack Overflow "add created_at and updated_at fields to mongoose schemas"
    this.set({ modified_date: new Date() });
    next();
  });

const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;
//** code  END