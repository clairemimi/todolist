const { homePage } = require('../controllers/app.ctrl');

const router = require('express').Router();

router.get('/home', homePage);

module.exports = router;
