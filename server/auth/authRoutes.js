const router = require('express').Router();
const { createToken } = require('./authFunction');
const User = require('../users/User');

router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.post('/login', function(req, res) {
  const { username, password } = req.body;
  if(!username || !password) {
    res.status(401).json({error: 'Enter log-in credentials (username and password).'})
  }

  User.findOne({ username })
    .then(user => {
      user.validatePassword(password)
        .then(validatedUser => {
          if(validatedUser) {
            const token = createToken(user)
            res.status(201).json({ user, token })
          } else {
            res.status(401).json({ err: 'Not authorized'})
          }
        })
        .catch(err => {
          res.status(500).json(err)
        })
      .catch(err => {
        res.status(500).json(err)
      })
    })
})

module.exports = router;
