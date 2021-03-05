const O_Auth = require('../dataBase/models/O_Auth');
const { tokenizer } = require('../helpers');

const findByParams = (filterObject) => O_Auth.findOne(filterObject);

const createRecord = async (userId) => {
  const tokens = tokenizer();
  await O_Auth.create({ _user_id: userId, ...tokens });

  return tokens;
};

const updateById = (recordId, updateObject) => O_Auth.findByIdAndUpdate(recordId, updateObject);

module.exports = {
  findByParams,
  createRecord,
  updateById
};
