const { Prescription } = require('../models/prescription');

const prescriptionsController = {
  index: async () => {
    const prescription = await Prescription.findAll({ attributes: ['id', 'name'] });
    return prescription;
  },
  create: params => Prescription.create(params.prescription)
};

module.exports = prescriptionsController;
