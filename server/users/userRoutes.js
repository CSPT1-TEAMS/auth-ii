const router = require('express').Router();

const User = require('./User');

router.get('/', (req, res) => {
  User.find()
    .select('-password')
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// router.post('/', (req, res) => {
//   const newUser = new User(req.body)
//   .save()
//   .then((user) => {
//     res.status(200).json(user)
//   })
//   .catch((error) => {
//     res.status(500).json(error)
//   })
// })

module.exports = router;
