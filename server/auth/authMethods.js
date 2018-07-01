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

const verifyWebToken = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                msg: "Invalid Token"
            })
        } else {
            return next()
        }
    })
}

module.exports = { generateWebToken, verifyWebToken }