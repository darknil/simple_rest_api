const Article = require('./article')

class CommentModel {
  async create(articleId, commentData) {
    try {
      const article = await Article.findById(articleId)
      if (!article) {
        throw new Error('Статья не найдена')
      }
      article.comments.push(commentData)
      await article.save()
      return commentData
    } catch (error) {
      throw error
    }
  }
  async edit(articleId, commentId, updatedCommentData) {
    try {
      const article = await Article.findById(articleId)
      if (!article) {
        throw new Error('Статья не найдена')
      }

      const comment = article.comments.id(commentId)
      if (!comment) {
        throw new Error('Комментарий не найден')
      }
      comment.set(updatedCommentData)
      await article.save()
      return comment
    } catch (error) {
      throw error
    }
  }
  async delete(articleId, commentId) {
    try {
      const article = await Article.findById(articleId)

      if (!article) {
        throw new Error('Статья не найдена')
      }
      article.comments.id(commentId).remove()

      await article.save()

      return { message: 'Комментарий успешно удален' }
    } catch (error) {
      throw error
    }
  }
}
module.exports = new CommentModel()
