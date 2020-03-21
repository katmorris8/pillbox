const { Prescription } = require('../../models/prescription');

const main = async () => {
  const pill1 = await Prescription.create({
    name: 'advil'
  });

  const pill2 = await Prescription.create({
    name: 'preparation h'
  });

  console.log(`made dis ${pill1} and dis ${pill2}`);

  process.exit();
};

main();
