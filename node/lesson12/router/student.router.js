const router = require('express').Router();

const { studentController } = require('../controller');
const { authMiddlewares } = require('../middleware');

router.get('/', studentController.getAll);
router.post('/',
  authMiddlewares.checkAccessTokenMiddleware,
  authMiddlewares.checkUserRole(['admin']),
  studentController.createStud);

module.exports = router;
