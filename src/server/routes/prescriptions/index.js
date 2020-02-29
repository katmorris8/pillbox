const express = require('express');
const prescriptionsController = require('../../controllers/prescriptions');

const router = express.Router();

router.get('/', (req, res) => res.send(prescriptionsController.index()));

module.exports = router;
