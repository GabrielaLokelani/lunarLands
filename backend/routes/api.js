const express = require('express');
const router = express.Router();
const estateData = require('../estateData');
const Estate = require('../models/Estate');

/* GET ESTATES LIST */
// router.get('/estates', (req, res, next) => {
//   res.send(estateData.estates)
// });

/* GET ESTATES INTO DB */
router.get('/seed', async (req, res) => {
  await Estate.remove({});
  const createdEstates = await Estate.insertMany(estateData.estates);
  res.send({ createdEstates });
})


module.exports = router;