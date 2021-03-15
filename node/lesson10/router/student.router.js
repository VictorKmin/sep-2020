const router = require('express').Router();

const { studentController } = require('../controller');

router.get('/', studentController.getAll);
router.post('/', studentController.createStud);

module.exports = router;
