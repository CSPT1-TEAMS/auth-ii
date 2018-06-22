const router = require('express').Router();

const { verifyToken } = require('../auth/authFunc');
const User = require('./User');

router.get('/', (req, res) => {
  User.find()
    .select('-password')
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/users', verifyToken, (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json({ users })
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

module.exports = router;
