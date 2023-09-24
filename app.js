const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

const authRouter = require('./src/routes/authRoutes')
const postRouter = require('./src/routes/postRoutes')

app.use(express.json())

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
  console.log(`link : http://localhost:3000/`)
})
