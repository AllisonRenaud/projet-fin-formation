const { json } = require('express');
const User = require('../models/User');

const userController = {

    findAll: async (_, response) => {
        try {
            const users = await User.findAll();
            response.json(users);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

}

module.exports = userController;