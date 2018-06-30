const router = require('express').Router();
const User = require('../users/User');
const { generateWebToken } = require('./authMethods');

router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.post('/login', (req, res) => {
  const { username, password } = req.body
  User.findOne({ username })
    .then(user => {
      if (user.validatePassword(password)) {
        const token = generateWebToken(user);
        return res.status(200).json({ user, token })
      } else {
        return res.status(401).json({
          msg: 'UNAUTHORIZED'
        })
      }
    })
})

module.exports = router;
