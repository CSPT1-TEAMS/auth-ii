const jwt = require('jsonwebtoken')
const secret = "Gerbilinidus And The Brave 300 Vs Xerxes McWhiskers"

const makeToken = (user) => {
    payload = {
        sub: user._id,
        name: user.username
    }
    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, secret, options)
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === undefined) {
        res.sendStatus(401);
        return
    }
    jwt.verify(token, secret, (err, payload) => {
        if(err){
            res.status(401).json({message: 'invalid token'})
        }
        req.jwtpayload = payload
        next()
    })
}

module.exports = {
    makeToken,
    verifyToken
}