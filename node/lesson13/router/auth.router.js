const router = require('express').Router();

const { authController } = require('../controller');

router.post('/', authController.authUser);

module.exports = router;
