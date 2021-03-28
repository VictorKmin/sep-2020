const router = require('express').Router();

const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const studentRouter = require('./student.router');

router.use('/auth', authRouter);
router.use('/students', studentRouter);
router.use('/users', userRouter);

module.exports = router;
