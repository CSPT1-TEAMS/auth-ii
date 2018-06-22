const jwt = require('jsonwebtoken');
const SECRET = 'SECRET COOKIE MONSTER';

const makeToken = (user) => {
    const payload = {
        sub: user._id,
        name: user.username,
        race: user.race
    }
    const options = {
        expiresIn: '24h'
    }
    return jwt.sign(payload, SECRET, options)
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    (console.log('TOKEN', token))
    if (token === null) {
        res.status(401).json({ msg: "You shall not pass" });
        return;
    }
    jwt.verify(token, SECRET, (err, payload) => {
        console.log('PAYLOAD', payload)
        if (err) {
            res.sendStatus(401);
            return;
        }
        req.jwtpayload = payload;
        next();
    })
}

module.exports = { makeToken, verifyToken }