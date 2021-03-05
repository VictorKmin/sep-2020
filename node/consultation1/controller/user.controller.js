const userService = require('../service/user.service');
const { passwordHasher } = require('../helpers');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.findUsers(req.query);

      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  getSingleUser: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const user = await userService.findUserById(userId);

      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const { password } = req.body;

      const hasPassword = await passwordHasher.hash(password);

      await userService.createUser({ ...req.body, password: hasPassword });

      res.status(201).json('USERS IS CREATED');
    } catch (e) {
      next(e);
    }
  },

  deleteUser: (req, res, next) => {
    try {
      const { userId } = req.params;

      if (userId !== req.user.id) {
        throw new Error('Unauthorized');
      }

      res.json(`${userId} is deleted`);
    } catch (e) {
      next(e);
    }
  },

};
