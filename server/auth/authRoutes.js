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



router.post('/register', (req, res) => {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.post('/login', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ msg: "Enter a valid username and password" })
  }
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      user.validatePassword(password)
        .then(isMatch => {
          if (isMatch) {
            const token = makeToken(user);
            res.status(200).json({ user, token })
          } else {
            res.status(401).json({ msg: "Username or password incorrect" })
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

module.exports = router;