const { errorCodesEnum } = require('../constant');
const ErrorHandler = require('../error/ErrorHandler');
const { BAD_REQUEST } = require('../error/error.messages');
const { userValidators } = require('../validators');
const User = require('../dataBase/models/User');

module.exports = {
  checkIsIdValid: (req, res, next) => {
    try {
      const { userId } = req.params;

      if (userId.length < 24) {
        throw new ErrorHandler(400, 4002);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  isUserValid: (req, res, next) => {
    try {
      const { error } = userValidators.createUserValidator.validate(req.body);

      if (error) {
        throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, BAD_REQUEST.customCode, error.details[0].message);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsUserPresent: async (req, res, next) => {
    try {
      const { email } = req.body;

      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        throw new Error('NO USER');
      }

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  },
};
