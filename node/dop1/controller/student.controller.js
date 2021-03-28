const studentService = require('../service/MySQL/student.service');
const { transactionInstance } = require('../dataBase/MySQL').getInstance();

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const students = await studentService.findAll();

      res.json(students);
    } catch (e) {
      next(e);
    }
  },

  createStud: async (req, res, next) => {
    const transaction = await transactionInstance();

    try {
      await studentService.createStudent(req.body, transaction);

      // throw new Error('xxx');

      await studentService.updateStudent(16, { name: 'Ira' }, transaction);
      await transaction.commit();
      res.json('OK');
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  }
};
