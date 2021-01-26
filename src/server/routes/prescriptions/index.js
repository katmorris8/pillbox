const express = require('express');
const prescriptionsController = require('../../controllers/prescriptions');

const router = express.Router();

router.get('/', async (req, res) => res.send(await prescriptionsController.index()));
router.post('/', async (req, res) => res.send(await prescriptionsController.create(req.body)));
router.delete('/', async (req, res) => res.send(await prescriptionsController.destroy(req.body)));

module.exports = router;
