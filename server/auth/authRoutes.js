/*
[ ] add the functionality to restrict access to `/api/users` to authenticated users only. If a non authenticated user tries to make a request the server should return the appropriate `HTTP status code`.
*/

const router = require('express').Router();

const User = require('../users/User');

// check that user is registered
const checkAuthorization = (req, res, next) => {
  const {session} = req

  if (session && session.isLoggedIn) {
    console.log('before next', req.session)
    return next()
  } else {
    res.status(401).json({msg: 'You must login first.  Please login.'})
  }
}

router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});

// restricted route
module.exports = router;
