const express = require('express');
const router = express.Router();

const weather = require('./weather');
const auth = require('./auth');

router.use('/weather', weather);
router.use('/auth', auth);

module.exports = router;
