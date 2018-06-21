const router = require('express').Router();
const session = require('express-session')
const verifyToken = require('../auth/jwt');
   
const User = require('./User');
// router.use(session({ secret: 'super secret password', name: 'vccookie' }))

// const checkAuthorization = (req, res, next) => {
//   const { session } = req;
//   if (session.isLoggedIn) {
//     return next()
//   } else {
//     res.status(401).json({ msg: 'UNAUTHORIZED' })
//   }
// }

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

router.post('/new', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then( user => res.status(201).json('User Registered!')
    .catch( err => res.status(500).send(err)))
  });



module.exports = router;
