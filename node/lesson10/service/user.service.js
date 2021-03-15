const User = require('../dataBase/models/User');
require('../dataBase/models/Car');

//
// priceGte=3000&price_lte=7000&category=car;lg;xxx&color=red&limit=20&page=7
// price: { $lte: 7000, $gte: 3000 }
//
// { category: { $in: [catArr] } }

module.exports = {
  findUsers: async (query = {}) => {
    const { limit = 20, page = 1, sortBy = 'createdAt', order = 'asc', ...filters } = query;
    const skip = (page - 1) * limit;
    const keys = Object.keys(filters); // [ priceGte, price_lte, category, color ]
    const filterObject = {};
    const orderBy = order === 'asc' ? -1 : 1;
    const sort = { [sortBy]: orderBy };

    // priceGte=3000&price_lte=7000&category=car;lg;xxx&color=red
    // [ priceGte, price_lte, category, color ]
    keys.forEach((key) => {
      switch (key) {
        case 'priceGte':
          filterObject.price = Object.assign({}, filterObject.price, { $gte: +filters.priceGte });
          break;
        case 'price_lte':
          filterObject.price = Object.assign({}, filterObject.price, { $lte: +filters.price_lte });
          break;
        case 'category':
          const categories = filters.category.split(';');
          filterObject.category = { $in: categories };
          break;
        // case 'name':
        //   filterObject.name = { $regex: filters.name, $options: 'i' };
        //   break;
        default:
          filterObject[key] = filters[key];
      }
    });

    const users = await User.find(filterObject).limit(+limit).skip(skip).sort(sort);
    const count = await User.countDocuments(filterObject);

    return {
      data: users,
      page,
      limit,
      count,
      pages: Math.ceil(count / limit)
    };
  },

  /**
   * HELLO WROLD
   * @returns {Query<Document | null, Document>} - user fr
   * @param userID
   */
  findUserById: (userID) => User.findById(userID),

  /**
   *
   * @param userObject
   * @returns {Promise<Document>}
   */
  createUser: (userObject) => User.create(userObject),

  updateUserById: (userId, updateObject) => User.updateOne({ _id: userId }, { $set: updateObject })
};
