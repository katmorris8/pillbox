const Prescription = require('../models/prescription');

const prescriptionsController = {
  index: () => Prescription.all(),
  create: (params) => Prescription.create(params.prescription)
};

module.exports = prescriptionsController;
