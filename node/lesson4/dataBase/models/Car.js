const { Schema, model } = require('mongoose');

const carScheme = new Schema({
  model: { type: String },
  price: { type: Number }
});

module.exports = model('Car', carScheme);
