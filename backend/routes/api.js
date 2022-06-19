const express = require('express');
const router = express.Router();
const estateData = require('../estateData');

/* GET ESTATES LIST */
router.get('/estates', (req, res, next) => {
  res.send(estateData.estates)
});

module.exports = router;