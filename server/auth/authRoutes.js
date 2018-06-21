const router = require('express').Router();
const User = require('../users/User');
const { makeToken } = require('./jwt');

router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.post('/login', function(req, res) {
  const { username, password } = req.body;
  User.findOne({username})
    .then(user => {
      user.validatePassword(password)
        .then((isMatch) => {
          if (isMatch) {
            const token = makeToken(user);
            res.status(201).json({ user, token })
          } else {
            res.status(401).json({msg: 'Else!!!'})
          }
        })
        .catch(err => res.status(401).json({msg: 'Invalid password'}))
    })
    .catch(err => res.status(404).json({msg: 'User not found'})) 
})

module.exports = router;
