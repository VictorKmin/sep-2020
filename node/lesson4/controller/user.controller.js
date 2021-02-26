const userService = require('../service/user.service');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      // { age: 22 }
      const users = await userService.findUsers(req.query);

      res.json(users);
    } catch (e) {
      res.status(418).json(e.message);
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await userService.findUserById(userId);

      console.log('_______________________________-');
      console.log(user);
      console.log('_______________________________-');

      res.json(user);
    } catch (e) {
      res.json(e.message);
    }
  },

  createUser: async (req, res) => {
    try {
      await userService.createUser(req.body);

      res.status(201).json('USERS IS CREATED');
    } catch (e) {
      res.json(e.message);
    }
  }
};
