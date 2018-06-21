const jwt = require('jsonwebtoken')

SECRET = "THIS SHOULD BE IN AN ENV VAR";
const verifyToken = (req,res,next) => {
    let session = req.headers.authorization
    let token = jwt.verify(session,SECRET)
    if (!token){
      res.sendStatus(401)
    }
    next()
    //secret is avail here
  }


  module.exports = verifyToken