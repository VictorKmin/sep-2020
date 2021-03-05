module.exports = class ErrorHandler extends Error {
  constructor(status, customCode, message = '') {
    super(message);
    this.status = status;
    this.customCode = customCode;

    Error.captureStackTrace(this, this.constructor);
  }
};
