
const express = require('express');
const { emailSender } = require('../controller/emailSender');
const router = express.Router();


router.post('/emailSender',emailSender)


module.exports = router;