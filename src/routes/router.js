const Router = require('express').Router
const router = new Router()
const path = require('path')

router.get('/login', (req, res) => {
  const filePath = path.join(__dirname, '../../public/login.html')
  res.sendFile(filePath)
})

router.get('/register', (req, res) => {
  const filePath = path.join(__dirname, '../../public/register.html')
  res.sendFile(filePath)
})

module.exports = router
