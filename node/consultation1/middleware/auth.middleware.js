const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_REFRESH_SECRET } = require('../configs/config');
const { constants, errorCodesEnum } = require('../constant');
const ErrorHandler = require('../error/ErrorHandler');
const { NO_TOKEN, WRONG_TOKEN, RECORD_NOT_FOUND } = require('../error/error.messages');
const { authService } = require('../service');

module.exports = {
  checkAccessTokenMiddleware: async (req, res, next) => {
    try {
      const access_token = req.get(constants.AUTHORIZATION);

      if (!access_token) {
        throw new Error('Token is required');
      }

      jwt.verify(access_token, JWT_SECRET, (err) => {
        if (err) {
          throw new ErrorHandler(errorCodesEnum.UNAUTHORIZED, WRONG_TOKEN.customCode);
        }
      });

      const tokens = await authService.findByParams({ access_token }).populate('_user_id');

      if (!tokens) {
        throw new ErrorHandler(errorCodesEnum.NOT_FOUND, RECORD_NOT_FOUND.customCode);
      }

      req.user = tokens._user_id;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkRefreshTokenMiddleware: async (req, res, next) => {
    try {
      const refresh_token = req.get(constants.AUTHORIZATION);

      if (!refresh_token) {
        throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, NO_TOKEN.customCode);
      }

      jwt.verify(refresh_token, JWT_REFRESH_SECRET, (err) => {
        if (err) {
          throw new ErrorHandler(errorCodesEnum.UNAUTHORIZED, WRONG_TOKEN.customCode);
        }
      });

      const tokens = await authService.findByParams({ refresh_token });

      if (!tokens) {
        throw new ErrorHandler(errorCodesEnum.NOT_FOUND, RECORD_NOT_FOUND.customCode);
      }

      req.tokenInfo = tokens;
      next();
    } catch (e) {
      next(e);
    }
  }
};
