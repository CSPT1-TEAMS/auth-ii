const router = require('express').Router();
const makeToken  = require('./jwt');

const session = require('express-session')


const User = require('../users/User');

router.post('/register', (req, res) => {
  User.create(req.body) 
    // .select('-password')
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password
      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

router.put('/login', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.sendStatus(400).json({ msg: 'Please enter a username and password' })
  }
  const { username, password } = req.body;
  User.findOne({ username })
  // .select('-password')
    .then(user => {
      user.comparePassword(password, isMatch => {
        if (isMatch) {
          const token = makeToken(user)
          res.status(201).json({ user, token });
        } else {
          res.status(401).json({ msg: 'Password Incorrect' })
        }
      })
        .catch(err => {
          res.status(500).json({ error: 'Error finding username', err });
    })

    }).catch(err => {
      res.status(500).json({ error: 'Error finding username', err });
  })
});

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


module.exports = router;
