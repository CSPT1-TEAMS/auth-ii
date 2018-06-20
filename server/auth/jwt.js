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

const verifyToken = () => {
    pass
}

module.exports = {
  makeToken,
}