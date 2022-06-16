const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

/* GET USER LIST FROM MONGO*/
router.get('/list-users', async function(req, res, next) {
  const users = await User.find({}).lean()
  console.log(users)
  res.json(users);
});

/* POST NEW USER TO MONGO */
router.post('/register', async function(req, res) {
  let password = ''
  const salt = bcrypt.genSaltSync(+process.env.SALT);
  const hash = bcrypt.hashSync(password, salt);
  const newUser = new User({
    username: '',
    password: hash,
    userImageUrl: '',
    cart: [],
    likedEstates: []
  })
  newUser.save((err, joy) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`ADDED USER TO DATABASE:\n${joy}`)
    };
  });
});

/* GET USER LOGIN */
router.get('/login', async function(req, res) {
  // TODO: pass in username and password input
  let username = 'Jesse'
  let password = '1234'

  const user = await User.findOne({username: username});

  if (user != null) {
    match = await bcrypt.compare(password, user.password);
  } else {
    console.log("USER NOT FOUND!")
  }

  if (match) {
    const payload = { id: user._id, username: username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '6h'});

    console.log("JWT SIGNED", token, payload)
    res.cookie('access_token', token);
  };
  res.json()
})


/* GET USER LOGOUT */
router.get('/logout', function(req, res) {
  res.clearCookie('access_token');
  res.json()
});

module.exports = router;