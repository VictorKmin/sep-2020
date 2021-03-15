const studentService = require('../service/MySQL/student.service');

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
    try {
      await studentService.createStudent(req.body);

      res.json('OK');
    } catch (e) {
      next(e);
    }
  }
};
