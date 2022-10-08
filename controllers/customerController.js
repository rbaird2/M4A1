const fs = require('fs');

const customers = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/customers.json`)
);


exports.getAllcustomers = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: customers.length,
    data: {
      customers
    }
  });
};

exports.getcustomer = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const customer = customers.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      customer
    }
  });
};

exports.createcustomer = (req, res) => {
  // console.log(req.body);

  const newId = customers[customers.length - 1].id + 1;
  const newcustomer = Object.assign({ id: newId }, req.body);

  customers.push(newcustomer);

  fs.writeFile(
    `${__dirname}/dev-data/data/customers.json`,
    JSON.stringify(customers),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          customer: newcustomer
        }
      });
    }
  );
};

exports.updatecustomer = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      customer: '<Updated customer here...>'
    }
  });
};

exports.deletecustomer = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
