const db = require('../db/db')

const userSchema = new db.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  savedArticles: [{ type: db.Schema.Types.ObjectId, ref: 'Article' }],
})

const User = db.model('User', userSchema)

module.exports = User
