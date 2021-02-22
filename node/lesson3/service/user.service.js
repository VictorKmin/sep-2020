const DB = require('../dataBase/users');

module.exports = {
    findUsers: () => {
        return DB;
    },

    /**
     *
     * @param userId - this is integer ID of user which should be returned
     * @returns {{name: string}} - user fr
     */
    findUserById: (userId) => {
        return DB[userId];
    },

    createUser: (userObject) => {
        DB.push(userObject);
    }
}
