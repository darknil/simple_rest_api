const commentsModel = require('../models/commentsModel')
const UserModel = require('../models/userModel')
const TokenService = require('../service/token-service')

class CommentController {
  async addComment(req, res) {
    try {
      const articleId = req.params.articleId

      if (candidate) {
        console.log(articleId, userId, username, text)
        const createdComment = await commentsModel.create(articleId, {
          userId,
          username,
          text,
        })
        res.status(201).json(createdComment)
      } else {
        return res.status(404).json({ error: 'User Not found' })
      }
    } catch (e) {
      console.log(e)
      return res
        .status(500)
        .json({ error: 'Произошла ошибка при создании комментария' })
    }
  }
}

module.exports = new CommentController()
