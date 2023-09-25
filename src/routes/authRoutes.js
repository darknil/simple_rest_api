const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/register', authController.registration)
// register new user with json
// {
//  "username" : "test",
//  "email" : "test@mail.com"
//  "password" : "test"
// }
//
router.post('/login', authController.login)
// login user with json
// {
//  "username" : "test",
//  "password" : "test"
// }
//
module.exports = router
