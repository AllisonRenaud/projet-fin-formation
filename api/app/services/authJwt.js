const jwt = require("jsonwebtoken")
const secret = process.env.ACCES_TOKEN_SECRET
// const {promisify} = require('util');

// const asyncVerify = promisify(jwt.verify).bind(jwt)


module.exports = {
    verifyToken: (req, res, next) => {
       
        let token = req.headers["authorization"];
        if(!token) return res.status(403).send("Unauthorized")
        token = token.split(" ")[1]
        if(!token) return res.status(403).send("Unauthorized")
            
            
        jwt.verify(token, secret, (err, data) => {
                
        if(err) res.status(403).json(err)
        else {
            req.token = data
            next()
        }
        })     
    },

    jwtSign: obj => {
        
        return jwt.sign(
            obj, 
            secret, 
            { expiresIn: '30m', algorithm: 'HS256' }
        )

    },

    isAdmin: (req, res, next) => {
        const isAdmin = req.token.role.find(role => role === 'admin')
        if(!isAdmin) return res.status(403).end()
        next()
    }

    
        
    
}

