const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

module.exports = {
  checkIsIdValid: (req, res, next) => {
    try {
      next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },

  isUserValid: (req, res, next) => {
    try {
      const { name, password, preferL = 'en' } = req.body;

      if (!name || !password) {
        throw new Error('Some filed is empty');
      }

      if (password.length < 6) {
        throw new Error(errorMessages.TOO_WEAK_PASSWORD[preferL]);
      }

      next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  }
};
