const commentsModel = require('../models/commentsModel')

class CommentController {
  async addComment(req, res) {
    try {
      const articleId = req.params.articleId
      const { userId, text } = req.body
      console.log(articleId, userId, text)
      const createdComment = await commentsModel.create(articleId, {
        userId,
        text,
      })
      res.status(201).json(createdComment)
    } catch (e) {
      console.log(e)
      return res
        .status(500)
        .json({ error: 'Произошла ошибка при создании комментария' })
    }
  }
}

module.exports = new CommentController()
