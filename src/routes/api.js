const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const commentsController = require('../controllers/commentController')

router.post('/articles/create', articleController.createArticle)
router.get('/articles', articleController.getArticle)
router.post('/articles/:articleId/comments', commentsController.addComment)

module.exports = router
