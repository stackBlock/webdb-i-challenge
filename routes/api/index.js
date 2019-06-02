const express = require('express');
const router = express.Router();
const inventoryRoute = require('./inventory');

router.use('/inventory', inventoryRoute);

module.exports = router;