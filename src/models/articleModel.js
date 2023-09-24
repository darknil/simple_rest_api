const Article = require('./article')

class ArticleModel {
  async create(articleData) {
    try {
      const newArticle = new Article(articleData)
      const savedArticle = await newArticle.save()
      return savedArticle
    } catch (e) {
      console.log(e)
    }
  }
  async get(articleId) {
    try {
      const article = await Article.findById(articleId)
      return article
    } catch (e) {
      console.log(e)
    }
  }
  async getByTitle(title) {
    try {
      const articles = await Article.find({ title })
      return articles
    } catch (e) {
      console.log(e)
    }
  }
  async update(articleId, updatedData) {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        articleId,
        updatedData,
        { new: true }
      )
      return updatedArticle
    } catch (e) {
      console.log(e)
    }
  }
  async delete(articleId) {
    try {
      const deletedArticle = await Article.findByIdAndRemove(articleId)
      return deletedArticle
    } catch (e) {
      console.log(e)
    }
  }
  async getByCategory(category) {
    try {
      const articles = await Article.find({ category })
      return articles
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new ArticleModel()
