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

  createStudent: (userObject, transaction) => {
    const Student = db.getModel('Student');

    return Student.create(userObject, { transaction });
  },

  createStudent2: (userObject) => {
    const Student = db.getModel('Student');

    return Student.create(userObject);
  },

  updateStudent: (id, student, transaction) => {
    const Student = db.getModel('Student');

    return Student.update(student, {
      where: { id },
      returning: true,
      transaction
    });
  },

  updateStudent2: (id, student) => {
    const Student = db.getModel('Student');

    return Student.update(student, {
      where: { id },
      returning: true
    });
  }
};
