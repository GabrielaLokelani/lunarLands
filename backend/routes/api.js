const express = require('express');
const data = require('../data');
const router = express.Router();

/* GET home page. */
router.get('/estates', (req, res) => {
  console.log(data.estates)
  res.send(data.estates)
});

module.exports = router;