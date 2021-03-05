const router = require('express').Router();

const { authController } = require('../controller');
const { authMiddlewares, userMiddlewares } = require('../middleware');

router.post('/', userMiddlewares.checkIsUserPresent, authController.authUser);
router.post('/refresh', authMiddlewares.checkRefreshTokenMiddleware, authController.refreshToken);

module.exports = router;
