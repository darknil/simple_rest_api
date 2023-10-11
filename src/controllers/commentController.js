const commentsModel = require('../models/commentsModel')
const UserModel = require('../models/userModel')
const TokenService = require('../service/token-service')

class CommentController {
  async addComment(req, res) {
    try {
      const token = req.headers['authorization']
      const articleId = req.params.articleId
      const text = req.body.text
      if (!text) {
        return res.status(401).json({ message: 'empty message' })
      }
      if (!token) {
        console.log('missing token')
        return res.status(401).json({ message: 'Authorization header missing' })
      }
      const decodedToken = await TokenService.verifyToken(token)
      if (!decodedToken) {
        console.log('invalid token')
        return res.status(401).json({ message: 'invalid token' })
      }
      const userId = decodedToken.sub
      const candidate = await UserModel.findUserById(userId)
      if (!candidate) {
        return res.status(404).json({ error: 'User Not found' })
      }
      const username = decodedToken.name
      const createdComment = await commentsModel.create(articleId, {
        userId,
        username,
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
