const jwt = require('jsonwebtoken');

const SECRET = "12jkh312jkhskldas903kldf9023jks";

const makeToken = user => {
  const payload = {
    sub: user._id,
    name: user.username,
  }
  const options = {
    expiresIn: "24h",
  }
  return jwt.sign(payload, SECRET, options)
}

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(401)
  }
  jwt.verify(token, SECRET, (err, payload) => {
    if (err) {
      return res.sendStatus(401)
    }
    req.payload = payload;
    next()
  })
    
}

module.exports = {
  makeToken,
  verifyToken
}