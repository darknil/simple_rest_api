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
    } catch (e) {
      console.log(e)
    }
  }
  async findUserById(userId) {
    try {
      const foundUser = await User.findOne({ _id: userId })
        .populate('savedArticles')
        .exec()
      return foundUser
    } catch (e) {
      console.log(e)
      throw e
    }
  }
  async findUserByEmail(email) {
    try {
      const foundUser = await User.findOne({ email })
        .populate('savedArticles')
        .exec()
      return foundUser
    } catch (e) {
      console.log(e)
      throw e
    }
  }
  async findUserByName(username) {
    try {
      const foundUser = await User.findOne({ username })
        .populate('savedArticles')
        .exec()
      return foundUser
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

module.exports = new UserModel()
