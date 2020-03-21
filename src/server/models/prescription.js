const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/pillbox_db', {
  dialect: 'progres'
});

const Prescription = sequelize.define('prescription', {
  name: Sequelize.TEXT
});

module.exports = {
  Prescription,
  sequelize
};
