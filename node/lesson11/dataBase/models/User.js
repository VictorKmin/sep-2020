const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum: { USER } } = require('../../constant');

// const carSubScheme = {
//   model: { type: String },
//   price: { type: Number }
// };

const userScheme = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 15 },
  // cars: [carSubScheme]
  cars: [{ type: Schema.Types.Mixed }],
  password: { type: String, select: false },
  email: { type: String },
  avatar: { type: String },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userScheme.virtual('full_name').get(function() {
  const lastName = 'Heroku';
  return `${this.name} ${lastName}`;
});

userScheme.virtual('userCars', {
  ref: 'Car',
  localField: 'cars',
  foreignField: '_id',
  // justOne: true,
  // options: {
  //   select: 'price'
  // }
});

userScheme
  .pre('find', function() {
    console.log('PRE FIND HOOK');
    this.populate('userCars');
  })
  .pre('findOne', function() {
    console.log('PRE FIND ONE HOOK');

    this.populate('userCars');
  });

module.exports = model(USER, userScheme);
