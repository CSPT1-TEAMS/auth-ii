const router = require('express').Router();

const User = require('./User');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  (console.log('TOKEN', token))
  if (token === undefined) {
    res.status(401).json({ msg: "You shall not pass" });
    return;
  }
  jwt.verify(token, SECRET, (err, payload) => {
    console.log('PAYLOAD', payload)
    //add more code here
    if (err) {
      res.sendStatus(401);
      return;
    }
    req.jwtpayload = payload;
    next();
  })
}

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

router.get('/users', verifyToken, (req,res) => {
  User.find()
    .then(users => {
      res.status(200).json({users})
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

module.exports = router;
