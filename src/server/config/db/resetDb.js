const { sequelize } = require('../../models/prescription');

const main = async () => {
  await sequelize.sync({ force: true });
  process.exit();
};

main();
