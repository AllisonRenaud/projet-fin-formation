const { json } = require('express');
const {User} = require('../models');
const bcrypt = require('bcrypt');

const authController = {
    login: async (request, response) => {
        try {
          const {email, password} = request.body
    
          console.log(email)
          const {rows} = await User.findByEmail(email)
          

          if(rows.lenght == 0) return response.status(404).send("email error")
    
          const compare = await bcrypt.compare(password, rows[0].password)

          if(!compare) return response.status(404).send("pwd error")
    
        //   const token = jwtSign({_id: user._id, role: user.role})
        //   if(!token) throw new Error("internal error sever")
          
          response.json(rows[0])
    
        } catch (error) {
            response.status(500).send(error)
        }
    
      },

      register: async (request, response) => {
        try {
            const data = {...request.body}

            const {rows} = await User.findByEmail(data.email)
            
            if(rows.length) return response.status(404).json("already registered")

            if(data.password !== data.passwordConfirm) return response.status(404).send("passwords doesn't match")

            // delete passwordConfirm
          
            const passwordCheck = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){8,}$')
            if(passwordCheck.test(data.password) === false) return response.status(404).json("password must have 1 lowercase letter, 1 uppercase letter, 1 number and minimum 8 characters")

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(data.password, salt);

            data.password = hashedPassword

            const foundUser = new User(data);
            const newUser = await foundUser.save();

            // delete newUser.password

            response.json(newUser)

          
        } catch (error) {
            response.status(500).send(error.message)
        }
      }

}

module.exports = authController;
