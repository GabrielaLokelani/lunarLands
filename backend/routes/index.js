const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/index', (req, res, next) => {
  console.log("howdy hey")
  res.send("howdy hey")
});

module.exports = router;
