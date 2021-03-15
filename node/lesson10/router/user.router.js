const router = require('express').Router();

const userController = require('../controller/user.controller');
const { authMiddlewares, fileMiddlewares, userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddlewares.checkIsIdValid, userController.getSingleUser);
router.delete('/:userId', authMiddlewares.checkAccessTokenMiddleware, userController.deleteUser);

// router.post('/', userMiddleware.isUserValid, userController.createUser);

router.post(
  '/',
  fileMiddlewares.checkFile,
  fileMiddlewares.checkAvatar,
  userMiddlewares.isUserValid,
  userController.createUser
);

module.exports = router;
