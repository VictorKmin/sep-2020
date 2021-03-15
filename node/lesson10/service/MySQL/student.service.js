// const db = require('../../dataBase/MySQL');
//
// module.exports = {
//   findAll: async () => {
//     const [dbResponse] = await db.query('SELECT * FROM students');
//
//     return dbResponse;
//   },
//
//   createStudent: (userObject) => {
//     const { age, gender, name } = userObject;
//
//     return db.query(`INSERT INTO students (age, gender, name) VALUE ('${age}', '${gender}', '${name}')`);
//   }
// };

const db = require('../../dataBase/MySQL').getInstance();

module.exports = {
  findAll: () => {
    const Student = db.getModel('Student');

    return Student.findAll();
  },

  createStudent: (userObject) => {
    const Student = db.getModel('Student');

    return Student.create(userObject);
  }
};
