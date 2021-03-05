const User = require('../dataBase/models/User');
require('../dataBase/models/Car');

module.exports = {
  findUsers: (filterObject) => User.find(filterObject),

  /**
   * HELLO WROLD
   * @returns {Query<Document | null, Document>} - user fr
   * @param userID
   */
  findUserById: (userID) => User.findById(userID),

  /**
   *
   * @param userObject
   * @returns {Promise<Document>}
   */
  createUser: (userObject) => User.create(userObject)
};
