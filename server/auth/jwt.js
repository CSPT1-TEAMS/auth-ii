const jwt = require('jsonwebtoken');
const SECRET = 'THIS SHOULD BE IN AN ENV VAR';


const makeToken = (user) => {
    const timestamp = new Date().getTime();
    const payload = {
        sub: user._id,
        name: user.username,
        iat: timestamp,
        loggedIn: true,
    }

    const options = {
        expiresIn: '24h',
    }
    return jwt.sign(payload, SECRET, options)

}

const verifyToken = (req, res, next)  => {
//get auth header
///make sure it exists
//if doesnt, send error.

const token = req.headers.authorization;
if(token === undefined){
    res.sendStatus(401);
    return;
}

jwt.verify(token, SECRET, (err, payload)  => {
    console.log(payload)
})

///if it does decodes
    //make sure it decodes
    //pass decoded payoud on the req

}

module.exports =  {makeToken, verifyToken}
