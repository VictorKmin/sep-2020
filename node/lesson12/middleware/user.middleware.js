const { errorCodesEnum } = require('../constant');
const { userValidators } = require('../validators');

module.exports = {
  checkIsIdValid: (req, res, next) => {
    try {
      next();
    } catch (e) {
      res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
    }
  },

  isUserValid: (req, res, next) => {
    try {
      const { error } = userValidators.createUserValidator.validate(req.body);

      if (error) {
        throw new Error(error.details[0].message);
      }

      next();
    } catch (e) {
      res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
    }
  }
};
