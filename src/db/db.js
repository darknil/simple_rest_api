const db = require('mongoose')
require('dotenv').config()
db.connect(process.env.dbURI + process.env.dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
module.exports = db
