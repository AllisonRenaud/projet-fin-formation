const {Comment} = require('../models');

const commentController = {

    findAll: async (_, response) => {
        try {
            const comments = await Comment.findAll();
            response.json(comments);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findByUserId: async (request, response) => {
      try {
          const comment = await Comment.findByUserId(parseInt(request.token.id, 10));
          response.json(comment);
      } catch(error) {
          response.status(500).send(error.message);
      }
  },

  create: async (request, response) => {
    try {
      
      request.body.user_id = request.token.id
      const newComment = new Comment(request.body).create()
      response.status(201).json(newComment);

    } catch (error) {
        response.status(500).send(error.message);
    }
  },

  delete: async (request, response) => {
      try {
          
          const commentID = parseInt(request.params.id, 10);
          
          const comment = await Comment.findById(commentID)

          if(!request.token.id === comment.user_id || !request.token.role === "admin") return response.status(403).send("Unauthorized") 
          
          await Comment.delete(commentID);
          response.status(200).json(`Comment with id ${commentID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = commentController;
