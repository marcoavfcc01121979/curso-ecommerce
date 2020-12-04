const router = require('express').Router();

router.use('/usuario', require('./usuarios'));

module.exports = router;