const router = require('express').Router();

const User = require('../users/User');

router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.post('/login', (req,res) => {
  const { username, password } = req.body
  User.findOne({username}) 
  .then((user) => {
    user.validatePassword(password)
      .then((isMatch) => {
        if(isMatch) {
          res.status(200).json({message: `welcome ${user.username}`})
        } else {
          res.sendStatus(401)
        }
      })
      .catch((error) => {
        res.status(500).json({message: 'unauthorized'})
      })
  })
  .catch((error) => {
    res.status(500).json(error)
  })
})
module.exports = router;
