const router = require('express').Router();
const verify = require('../auth/authHelper')

const User = require('./User');


//put in verify middleware 
router.get('/',verify, (req, res) => {
  console.log(req)
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
