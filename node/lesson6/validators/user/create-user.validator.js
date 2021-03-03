const Joi = require('joi');

const { constants, regexpEnum } = require('../../constant');

const girlSubScheme = Joi.array().items(
  Joi.object({
    name: Joi.string().alphanum().max(20)
  })
);

module.exports = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(2)
    .max(50)
    .allow('X Æ A-Xii'),
  email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).required(),
  // email: Joi.string().email(),
  password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required(),
  // age: Joi.number().integer().min(3).max(120),
  car: Joi.boolean(),
  // yearOfBorn: Joi.number().integer().min(constants.CURRENT_YEAR - 100).max(constants.CURRENT_YEAR),
  girls: girlSubScheme.optional().when('car', { is: true, then: Joi.required() })
});
