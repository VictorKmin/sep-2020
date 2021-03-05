const { passwordHasher, tokenizer } = require('../helpers');
const ErrorHandler = require('../error/ErrorHandler');
const { authService } = require('../service');

module.exports = {
  authUser: async (req, res, next) => {
    try {
      const { body: { password }, user } = req;

      await passwordHasher.compare(password, user.password);

      const tokens = await authService.createRecord(user._id);

      res.json(tokens);
    } catch (e) {
      next(e);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const { _user_id, _id } = req.tokenInfo;

      const tokens = tokenizer();

      await authService.updateById(_id, { ...tokens, _user_id });

      res.json(tokens);
    } catch (e) {
      next(e);
    }
  }
};
