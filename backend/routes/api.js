const express = require('express');
const router = express.Router();
const estateData = require('../estateData');

/* GET ESTATES LIST */
router.get('/estates', (req, res, next) => {
  console.log(estateData.estates)
  res.send(estateData.estates)
});

module.exports = router;