const User = require('./user')
class UserModel {
  async createUser(username, email, passwordHash, savedArticles = []) {
    try {
      const newUser = new User({
        username,
        email,
        password_hash: passwordHash,
        savedArticles,
      })
      const savedUser = await newUser.save()
      return savedUser
    } catch (error) {
      throw error
    }
  }
  async findUserByName(name) {
    try {
      const foundUser = await User.findOne({ name })
        .populate('savedArticles')
        .exec()
      return foundUser
    } catch (error) {
      throw error
    }
  }
}

module.exports = new UserModel()
