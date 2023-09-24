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
  async findUserByName(username) {
    try {
      const foundUser = await User.findOne({ username })
        .populate('savedArticles')
        .exec()
      return foundUser
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new UserModel()
