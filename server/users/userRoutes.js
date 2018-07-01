const router = require('express').Router();

const User = require('./User');
const { verifyWebToken } = require('../auth/authMethods');

router.get('/', verifyWebToken, (req, res) => {
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
