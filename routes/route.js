const express = require('express');
const router = express.Router();
const {getProfile} = require('../controller/getProfile');

router.get('/profile', getProfile);

module.exports = router;