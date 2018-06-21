const router = require('express').Router();
const jwt = require('jsonwebtoken');
const SECRET = 'SECRET COOKIE MONSTER'

const User = require('../users/User');

const makeToken = (user) => {
  const payload = {
    sub: user._id,
    name: user.username,
    race: user.race
  }
  const options = {
    expiresIn: '24h'
  }
  return jwt.sign(payload, SECRET, options)
}

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined) {
    res.status(401).json({ msg: "You shall not pass" });
    return;
  }
  jwt.verify(token, SECRET, (err, payload) => {
    console.log(payload)
    //add more code here
    if (err) {
      res.sendStatus(401);
      return;
    }
    req.jwtpayload = payload;
    next();
  })
}

router.post('/register', (req, res) => {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.put('/login', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ msg: "Enter a valid username and password" })
  }
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      user.validatePassword(password)
        .then(isMatch => {
          console.log(isMatch)
          if (isMatch) {
            const token = makeToken(user);
            res.status(200).json({ user, token })
          } else {
            res.status(401).json({ msg: "nope" })
          }
        })
        .catch(err => {
          res.sendStatus(500)
        })
        .catch(err => {
          res.sendStatus(500);
        })
    })
})

module.exports = { router, verifyToken };