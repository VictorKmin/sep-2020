const router = require('express').Router();

const userRouter = require('./user.router');
const authRouter = require('./auth.router');

router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports = router;
