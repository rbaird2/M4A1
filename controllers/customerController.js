//** Code START
const Customer = require('./../models/customerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getAllCustomers =   async (req, res) => {  //SELECT all data
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCustomer = async (req, res) => {  //SELECT specific data
  try {
    const customer = await Customer.findById(req.params.id);
    // Customer.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createCustomer = async  (req, res) => {  //INSERT new data
  try {
    // const newCustomer = new Customer({})
    // newCustomer.save()

    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer: newCustomer
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateCustomer = async (req, res) => {  //UPDATE existing data
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {  //not tour variable
      // new: true,
      // runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customer // not tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteCustomer = async (req, res) => {  //DELETE existing data
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
// exports.loginRequired = function(req, res, next) {
//   if (req.user) {
//     next();
//   } else {

//     return res.status(401).json({ message: 'Unauthorized user!!' });
//   }
// };

//**Code  END