const express = require('express');
const router = express.Router();
const estateData = require('../estateData');
const Estate = require('../models/Estate');

/* GET ESTATES LIST */
router.get('/', async (req, res) => {
    const estates = await Estate.find();
    res.send(estates);
  })
  
  /* GET ESTATE */
  router.get('/_id/:_id', async (req, res, next) => {
    const estate = await Estate.findOne({_id:req.params._id});
    if (estate) {
      res.send(estate);
    } else {
      res.status(404).send({message: 'Estate not found'})
    }
    
  });
  
  router.get('/:_id', async(req, res, next) => {
    const estate = await Estate.findById(req.params.id);
    if (estate) {
      res.send(estate);
    } else {
      res.status(404).send({message: 'Estate not found'})
    }
    
  });

  module.exports = router;