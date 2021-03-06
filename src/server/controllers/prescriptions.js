const { Prescription } = require('../models/prescription');

const prescriptionsController = {
  index: async () => {
    const prescriptions = await Prescription.findAll({ attributes: ['id', 'name'] });
    return prescriptions;
  },
  create: async (params) => {
    const prescription = await Prescription.create(params.prescription);
    return prescription;
  },
  destroy: async (params) => {
    const prescription = await Prescription.destroy({ where: { id: params.prescription.id } });
    return prescription;
  }
};

module.exports = prescriptionsController;
