const User = require('../dataBase/models/User');

module.exports = async () => {
  const usersCount = await User.countDocuments();
  console.log(usersCount);
};
