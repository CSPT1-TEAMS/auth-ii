const router = require('express').Router();
const User = require('../users/User');
const makeToken = require('./jwt');

router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.put('/login', (req, res) => {

})

module.exports = router;
