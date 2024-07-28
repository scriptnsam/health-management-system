const router = require('express').Router();

const authRoute = require('./auth/auth');
const adminRoute = require('./admin/admin');

router.use('/auth', authRoute);
router.use('/admin', adminRoute);

module.exports = router;