const {User} = require('../models');

const userController = {

    findAll: async (_, response) => {
        try {
            const users = await User.findAll();
            response.json(users);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findById: async (request, response) => {
        try {
            const user = await User.findById(parseInt(request.token.id, 10));
            delete user.password
            for(const key in user) !user[key] ? delete user[key] : null

            response.json(user);
        } catch(error) {
            response.status(500).send(error.message);
        }
        
    },

    save: async (request, response) => {
        try {
            if(!request.body.id) throw new Error("id is not provided")
            const user = new User(request.body);
            const newUser = await user.save();
            response.status(204).json('Update done');
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    delete: async (request, response) => {
        try {
            const userID = parseInt(request.params.id, 10);
            await User.delete(userID);
            response.status(200).json(`User with id ${userID} deleted`);
        } catch(error) {
            response.status(500).send(error.message);
        }
    }

}

module.exports = userController;
