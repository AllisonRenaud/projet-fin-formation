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

    findById: async (request, response) => {
      try {
          const comment = await Comment.findById(parseInt(request.params.id, 10));
          response.json(comment);
      } catch(error) {
          response.status(500).send(error.message);
      }
  },

  save: async (request, response) => {
      try {
          const comment = new Comment(request.body);
          const newComment = await comment.save();
          if (newComment) {
              //on a une valeur de retour, il s'agit d'un INSERT
              response.status(201).json(newComment);
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
          const commentID = parseInt(request.params.id, 10);
          await Comment.delete(commentID);
          response.status(200).json(`Comment with id ${commentID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = commentController;
