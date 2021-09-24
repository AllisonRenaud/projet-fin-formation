const {Message} = require('../models');

const messageController = {

    findAll: async (_, response) => {
        try {
            const messages = await Message.findAll();
            response.json(messages);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findById: async (request, response) => {
      try {
          const message = await Message.findById(parseInt(request.params.id, 10));
          response.json(message);
      } catch(error) {
          response.status(500).send(error.message);
      }
  },

  save: async (request, response) => {
      try {
          const message = new Message(request.body);
          const newMessage = await message.save();
          if (newMessage) {
              //on a une valeur de retour, il s'agit d'un INSERT
              response.status(201).json(newMessage);
          } else {
              //pas de valeur de retour, c'était un UPDATE
              response.status(204).json('Update done');
          }
      } catch (error) {
          response.status(500).send(error.message);
      }
  },

  delete: async (request, response) => {
      try {
          const messageID = parseInt(request.params.id, 10);
          await Message.delete(messageID);
          response.status(200).json(`Message with id ${messageID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = messageController;
