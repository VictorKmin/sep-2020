const router = require('express').Router();

const userController = require('../controller/user.controller');
const { userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddlewares.checkIsIdValid, userController.getSingleUser);

// router.post('/', userMiddleware.isUserValid, userController.createUser);

router.post('/', userMiddlewares.isUserValid, userController.createUser);

module.exports = router;
