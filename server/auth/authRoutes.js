const router = require('express').Router();

const User = require('../users/User');
const {makeToken, verifyToken} = require('./authFunctions')

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
          const token = makeToken(user)
          res.status(200).json({user, token})
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

router.get('/token', verifyToken, (req, res) => {
  const {jwtpayload} = req;
  User.findById(jwtpayload.sub)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.sendStatus(500)
    })
})
module.exports = router;
