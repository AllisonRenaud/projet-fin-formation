const commentRouter = require('express').Router()
const commentController = require("../controllers/commentController")


commentRouter.route("/comments")
.get(commentController.findAll)
.post(commentController.save)

commentRouter.route("/comments/:id")
.get(commentController.findById)
.delete(commentController.delete)

module.exports = commentRouter
