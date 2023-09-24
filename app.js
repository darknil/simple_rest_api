const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const port = 3000

const authRouter = require('./src/routes/authRoutes')
const apiRouter = require('./src/routes/api')
const router = require('./src/routes/router')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)
app.use('/auth', authRouter)
app.use('/api', apiRouter)
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'public', '404.html')
  res.status(404).sendFile(filePath)
})

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
  console.log(`link : http://localhost:3000/`)
})
