const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:8080/pillbox_db', {
  dialect: 'progres'
});

const Prescription = sequelize.define('prescription', {
  name: Sequelize.TEXT
});

// const prescriptionModel = {
// all: () => {
//   return { prescriptions: [{name: 'advil'}, {name: 'preparation h'}] }
// },
// create: (params) => {
//   return {status: 'okay', prescription: {id: 1, name: params.name}}
// }
// };

module.exports = {
  Prescription,
  sequelize
};
