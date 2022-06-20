const express = require('express');
const router = express.Router();
const estateData = require('../estateData');

/* GET ESTATES LIST */
router.get('/estates', (req, res, next) => {
  res.send(estateData.estates)
});

/* GET ESTATE */
router.get('/estates/_id/:_id', (req, res, next) => {
  const estate = estateData.estates.find(x => x._id === req.params._id);
  if (estate) {
    res.send(estate);
  } else {
    res.status(404).send({message: 'Estate not found'})
  }
  
});

module.exports = router;