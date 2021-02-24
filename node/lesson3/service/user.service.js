const DB = require('../dataBase/users');

module.exports = {
    findUsers: () => DB,

    /**
     *
     * @param userId - this is integer ID of user which should be returned
     * @returns {{name: string}} - user fr
     */
    findUserById: (userId) => DB[userId],

    createUser: (userObject) => {
        DB.push(userObject);
    }
};
