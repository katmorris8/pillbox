const Prescription = require('../models/prescription');

const prescriptionsController = {
  index: () => Prescription.all()
};

module.exports = prescriptionsController;
