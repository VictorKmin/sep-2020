const User = require('../dataBase/models/User');
const O_Auth = require('../dataBase/models/O_Auth');
const { passwordHasher, tokenizer } = require('../helpers');

module.exports = {
  authUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('NO USER');
      }

      await passwordHasher.compare(password, user.password);

      const tokens = tokenizer();

      await O_Auth.create({ ...tokens, _user_id: user._id });

      res.json(tokens);
    } catch (e) {
      res.json(e.message);
    }
  }
};
