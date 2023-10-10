const jwt = require('jsonwebtoken')
require('dotenv').config()
const key = process.env.secretKey
class TokenService {
  async generateToken(payload, expiresIn = '1h') {
    const accessToken = jwt.sign(payload, key, { expiresIn })
    return accessToken
  }
  async verifyToken(token) {
    try {
      return jwt.verify(token, key)
    } catch (e) {
      return null
    }
  }
}

module.exports = new TokenService()
