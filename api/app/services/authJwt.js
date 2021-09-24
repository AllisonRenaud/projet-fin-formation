const jwt = require("jsonwebtoken")
const secret = process.env.ACCES_TOKEN_SECRET
// const {promisify} = require('util');

// const asyncVerify = promisify(jwt.verify).bind(jwt)


module.exports = {
    verifyToken: (request, response, next) => {
       
        let token = request.headers["authorization"];
        if(!token) return response.status(403).send("Unauthorized")
        token = token.split(" ")[1]
        if(!token) return response.status(403).send("Unauthorized")
          
            
        jwt.verify(token, secret, (err, data) => {
                
        if(err) {
          console.log(err)
          response.status(403).send("Unauthorized")
        }
        else {
            request.token = data
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

    isAdmin: (request, response, next) => {
        const isAdmin = request.token.role === "admin"
        if(!isAdmin) return response.status(403).send("Unauthorized")
        next()
    }

    
        
    
}

