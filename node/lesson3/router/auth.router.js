const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('AUTH IS SUCCESS')
});

module.exports = router;
