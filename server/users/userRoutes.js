const router = require('express').Router();
const { verifyToken } = require('../auth/jwt');
const User = require('./User');

router.get('/', verifyToken, (req, res) => {
  User.find()
    .select('-password')
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
