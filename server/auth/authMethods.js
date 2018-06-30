const jwt = require('jsonwebtoken');
const SECRET = "Super Secret Key"

const generateWebToken = (user) => {
  const payload = {
    sub: user._id,
    name: user.username
  }
  const options = {
      expiresIn: '24h'
  }
  return jwt.sign(payload, SECRET, options)
}

// const verifyToken = (token) => {
//     jwt.verify(token, SECRET, (err, decoded) => {

//     })
// }

moudle.exports = { generateWebToken }