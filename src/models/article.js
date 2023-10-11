const db = require('../db/db')

const articleSchema = new db.Schema({
  category: { type: String, required: true },
  publicationDate: { type: Date, default: Date.now },
  title: { type: String, required: true },
  body: { type: String, required: true },

  reactions: {
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
  },
  comments: [
    {
      _id: { type: db.Schema.Types.ObjectId, auto: true },
      userId: { type: db.Schema.Types.ObjectId, ref: 'User' },
      username: { type: String, ref: 'User' },
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  saveCount: { type: Number, default: 0 },
})

const Article = db.model('Article', articleSchema)

module.exports = Article
