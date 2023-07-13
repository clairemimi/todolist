const router = require('express').Router();
const appRoutes = require('./app.routes');
const usersRoutes = require('./users.routes');

router.use(appRoutes);
router.use(usersRoutes);

router.get('*', (req, res) => res.redirect('/home'));

module.exports = router;
