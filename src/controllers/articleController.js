const articleModel = require('../models/articleModel')

class ArticleController {
  async createArticle(req, res) {
    try {
      const articleData = req.body
      const createdArticle = await articleModel.create(articleData)
      res.status(201).json(createdArticle)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: 'Could not create article' })
    }
  }
  async getArticle(req, res) {
    try {
      const { title } = req.query
      console.log(title)
      const article = await articleModel.getByTitle(title)
      if (!article) {
        res.status(500).json({ error: 'Could not find article' })
      }
      res.status(200).json(article)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

module.exports = new ArticleController()
