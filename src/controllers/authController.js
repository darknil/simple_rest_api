const bcrypt = require('bcrypt')
const User = require('../models/user')
const UserModel = require('../models/userModel')
const TokenService = require('../service/token-service')

class AuthController {
  async registration(req, res) {
    try {
      const { username, email, password } = req.body
      console.log(username, email, password)
      const candidate = await UserModel.findUserByEmail(email)
      if (candidate) {
        return res
          .status(400)
          .json({ message: 'user with that email already exists' })
      }
      const password_hash = await bcrypt.hash(password, 10)
      const newUser = new User({
        username,
        email,
        password_hash,
      })
      const savedUser = await newUser.save()

      res
        .status(200)
        .json({ data: { savedUser }, message: 'registration successful' })
    } catch (e) {
      console.log(e)
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body
      const user = await UserModel.findUserByName(username)
      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }
      const isPasswordValid = await bcrypt.compare(password, user.password_hash)
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Incorrect password' })
      }
      const payload = { userId: user.id, username: user.username }
      const token = await TokenService.generateToken(payload)
      res.status(200).json({ message: 'Authentication successful', token })
    } catch (e) {
      console.log(e)
    }
  }
}
module.exports = new AuthController()
