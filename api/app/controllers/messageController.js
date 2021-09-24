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

    findByUserId: async (request, response) => {
      try {
          const message = await Message.findByUserId(parseInt(request.token.id, 10));
          response.json(message);
      } catch(error) {
          response.status(500).send(error.message);
      }
  },

  create: async (request, response) => {
    try {
      request.body.user_id = request.token.id
      const newMessage = new Message(request.body).create()
      response.status(201).json(newMessage);

    } catch (error) {
        response.status(500).send(error.message);
    }
  },

  update: async (request, response) => {
    try {
    
        await Message.update(request.body)
        response.status(204).json('Update done');

    } catch (error) {
            response.status(500).send(error.message);
    }
  },

  delete: async (request, response) => {
      try {
          const messageID = parseInt(request.params.id, 10);
          
          const message = await Message.findById(messageID)

          if(!request.token.id === message.user_id || !request.token.role === "admin") return response.status(403).send("Unauthorized") 
          
          // const messageID = parseInt(request.params.id, 10);
          await Message.delete(messageID);
          response.status(200).json(`Message with id ${messageID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = messageController;
