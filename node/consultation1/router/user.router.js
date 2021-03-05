const router = require('express').Router();

const userController = require('../controller/user.controller');
const { authMiddlewares, userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);

router.post('/', userMiddlewares.isUserValid, userController.createUser);
//
router.use('/:userId', userMiddlewares.checkIsIdValid);
router.get('/:userId', userController.getSingleUser);
router.delete('/:userId', authMiddlewares.checkAccessTokenMiddleware, userController.deleteUser);

// router
//   .route('/:userId')
//   .all(userMiddlewares.checkIsIdValid)
//   .delete(authMiddlewares.checkAccessTokenMiddleware, userController.deleteUser)
//   .get(userController.getSingleUser);

// router.post('/', userMiddleware.isUserValid, userController.createUser);

module.exports = router;
