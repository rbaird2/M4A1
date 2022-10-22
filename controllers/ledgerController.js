//** Code START
const Ledger = require('./../models/ledgerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getAllLedgers =   async (req, res) => {  //SELECT all data
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Ledger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const ledgers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: ledgers.length,
      data: {
        ledgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLedger = async (req, res) => {  //SELECT specific data
  try {
    const ledger = await Ledger.findById(req.params.id);
    // Ledger.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        ledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLedger = async  (req, res) => {  //INSERT new data
  try {
    // const newLedger = new Ledger({})
    // newLedger.save()

    const newLedger = await Ledger.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        ledger: newLedger
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateLedger = async (req, res) => {  //UPDATE existing data
  try {
    const ledger = await Ledger.findByIdAndUpdate(req.params.id, req.body, {  //not tour variable
      // new: true,
      // runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        ledger // not tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLedger = async (req, res) => {  //DELETE existing data
  try {
    await Ledger.findByIdAndDelete(req.params.id);

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

//**Code  END