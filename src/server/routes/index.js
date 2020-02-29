const express = require('express');
const prescriptions = require('./prescriptions');

const router = express.Router();

router.use('/api/prescriptions', prescriptions);

module.exports = router;
