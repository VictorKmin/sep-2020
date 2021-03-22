const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum: { CAR } } = require('../../constant');

const carScheme = new Schema({
  model: { type: String },
  price: { type: Number }
});

module.exports = model(CAR, carScheme);
