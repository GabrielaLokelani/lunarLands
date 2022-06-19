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


router.get('/register', async function(req, res) {
  console.log("gonna get the register page")
});
/* POST NEW USER TO MONGO */
router.post('/register', async (req, res) => {

  //   let password = ''
//   const salt = bcrypt.genSaltSync(+process.env.SALT);
//   const hash = bcrypt.hashSync(password, salt);
//   const newUser = new User({
//     username: '',
//     password: hash,

  const {username, password, userImageUrl} = req.body;
  User.findOne({username:username}, (err, user) => {
    if (user) {
      res.send({message: 'uesrname already exists'})
    } else {
    const user = new User({username, password, userImageUrl})
      user.save(err => {
        if (err) {
          res.send(err)
        } else {
          res.send({message: 'Welcome to Lunar Lands'})
        }
      })
    }
  })
})

/* GET USER LOGIN */
router.post('/login', async function(req, res) {
  const {username, password} = req.body

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

/* POST NEW USER TO MONGO */
// router.post('/register', async function(req, res) {
//   let password = ''
//   const salt = bcrypt.genSaltSync(+process.env.SALT);
//   const hash = bcrypt.hashSync(password, salt);
//   const newUser = new User({
//     username: '',
//     password: hash,
//     userImageUrl: '',
//     cart: [],
//     likedEstates: []
//   })
//   newUser.save((err, joy) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(`ADDED USER TO DATABASE:\n${joy}`)
//     };
//   });
// });