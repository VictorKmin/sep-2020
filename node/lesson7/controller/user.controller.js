const { emailActionsEnum } = require('../constant');
const { emailService, userService } = require('../service');
const { passwordHasher } = require('../helpers');

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
      const { password, email } = req.body;

      const hasPassword = await passwordHasher.hash(password);

      await userService.createUser({ ...req.body, password: hasPassword });

      await emailService.sendMail(email, emailActionsEnum.WELCOME, { userName: email });

      res.status(201).json('USERS IS CREATED');
    } catch (e) {
      res.json(e.message);
    }
  },

  deleteUser: (req, res) => {
    try {
      const { userId } = req.params;

      if (userId !== req.user.id) {
        throw new Error('Unauthorized');
      }

      console.log('---------------------------------------------------');
      console.log(req.user);
      console.log('---------------------------------------------------');

      res.json(`${userId} is deleted`);
    } catch (e) {
      res.json(e.message);
    }
  },

};
