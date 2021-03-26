// MIDDLEWARE
require('dotenv').config()
const jsonWebToken = require('jsonwebtoken')

async function authChecker(req, res, next){
    let tokenString = req.header("x-auth-token")
    let token = tokenString.split(" ")[1]
    if(tokenString){
        if(!token){
            return res.status(401).json({ message : "Get a token before accessing this"})
        }

        try{
            const decoded = jsonWebToken.verify(token, process.env.SECRET)
            req.user = decoded.user
            next()

        }catch(e){
            return res.status(401).json({ message : "Token isn't valid"})
        }

    }else{
        return res.status(401).json({ message : "no token biatch"})
    }

}

module.exports = authChecker