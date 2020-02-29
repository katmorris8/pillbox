const prescriptionModel = {
  all: () => {
    return { prescriptions: [{name: 'advil'}, {name: 'preparation h'}] }
  },
  create: (params) => {
    return {status: 'okay', prescription: {id: 1, name: params.name}}
  }
};

module.exports = prescriptionModel;
