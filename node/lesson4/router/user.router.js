const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddleware.checkIsIdValid, userController.getSingleUser);

// router.post('/', userMiddleware.isUserValid, userController.createUser);

router.post('/', userController.createUser);

module.exports = router;
