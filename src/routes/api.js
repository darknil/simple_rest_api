const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const commentsController = require('../controllers/commentController')

router.post('/articles/create', articleController.createArticle)
// create new article with json
// {
//   "category" : "test",
//   "title" : "test",
//   "body" : "test body"
// }
//

router.get('/articles', articleController.getArticle)
// get article by name with get request /api/articles?id=articleId

router.post('/articles/:articleId/comments', commentsController.addComment)
// post comment to article by id with post request and json /api/articles/:articleId/comments
//{
//  jwt in headers
//}
//{
//   "text": "your comment"
// }
//

module.exports = router
