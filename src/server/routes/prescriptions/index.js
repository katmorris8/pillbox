const express = require('express');
const prescriptionsController = require('../../controllers/prescriptions');

const router = express.Router();

router.get('/', async (req, res) => res.send(await prescriptionsController.index()));
router.post('/', (req, res) => res.send(prescriptionsController.create(req.body)));

module.exports = router;
