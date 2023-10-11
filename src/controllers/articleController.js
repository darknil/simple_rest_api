const articleModel = require('../models/articleModel')
const TokenService = require('../service/token-service')

class ArticleController {
  async createArticle(req, res) {
    try {
      const token = req.headers['authorization']
      if (!token) {
        console.log('missing token')
        return res.status(401).json({ message: 'missing token' })
      }
      const decodedToken = await TokenService.verifyToken(token)
      if (!decodedToken) {
        console.log('invalid token')
        res.status(401).json({ message: 'invalid token' })
      }
      const articleData = req.body
      if (!articleData || !articleData.category || !articleData.title) {
        console.log('Missing or empty fields in article data')
        return res
          .status(400)
          .json({ error: 'Missing or empty fields in article data' })
      }
      const createdArticle = await articleModel.create(articleData)
      res.status(201).json(createdArticle)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: 'Could not create article' })
    }
  }
  async getArticle(req, res) {
    try {
      const articleId = req.query.id
      console.log(articleId)
      const article = await articleModel.get(articleId)
      if (!article) {
        return res.status(500).json({ error: 'Could not find article' })
      }
      res.status(200).json(article)
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}

module.exports = new ArticleController()
