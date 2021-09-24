const {User} = require('../models');
const bcrypt = require('bcrypt');

const authController = {
    signin: async (request, response) => {
        try {
          const {email, password} = request.body
          
          const user = await User.findByEmail(email)

          if(!user) return response.status(404).end("auth error")
    
          const compare = await bcrypt.compare(password, user.password)

          if(!compare) return response.status(404).end("auth error")
    
        //   const token = jwtSign({_id: user._id, role: user.role})
        //   if(!token) throw new Error("internal error sever")
          
          response.json(user)
    
        } catch (error) {
            response.status(500).end(error.message)
        }
    
      },

      singup: async (request, response) => {
        try {
            const {email, password, passwordConfirm} = request.body

            const registeredUser = await User.findByEmail(email)
            if(registeredUser) return response.status(400).end("already registered")

            delete request.body.passwordConfirm
            
            const salt = await bcrypt.genSalt(10);
            request.body.password = await bcrypt.hash(password, salt);

            const newUser = await new User(request.body).save();
            
            delete newUser.password

            response.json(newUser)

          
        } catch (error) {
            response.status(500).end(error.message)
        }
      }

}

module.exports = authController;
