// const User = require('../user/User.js')

const router = require('express').Router();
const jwt = require('jsonwebtoken');
const SECRET = 'THIS SHOULD BE IN AN ENV VAR';
const User = require('../users/User');


const makeToken = (user) => {
const timestamp = new Date().getTime();
const payload = {
  sub: user._id,
  name: user.username,
  iat: timestamp,
  loggedIn: true,
}


//what is put in the header
const options = {
  expiresIn:'24h'
}

//returns a token as async
return jwt.sign(payload, SECRET , options)

}

const verifyTOken = () => {
  //secret is avail here
}


router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      const payload = {
        username,
        race,
      }

      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      let token = jwt.sign(payload, SECRET, {expiresIn: '24hr'})

      res.status(201).json({ username, race, token });
    })
    .catch(err => res.status(500).json(err));
});

router.put('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({username})
  // .populate('password: -1')
  .then(user => {
    user.validatePassword(password)
      .then(isMatch => {
        if(isMatch) {
          const token = makeToken(user)
          console.log(token);
          console.log(user);
          res.status(201).json({user, token})
        } else {
          res.sendStatus(401);
        }
      })
      .catch(err => res.sendStatus(500))
    
  })
  .catch(err => res.sendStatus(500))
})

module.exports =  router;
// module.exports = makeToken;