const router = require('express').Router();

const authRoute = require('./auth/auth');
const adminRoute = require('./admin/admin');
const patientRoute = require('./patient/patient');

router.use('/auth', authRoute);
router.use('/admin', adminRoute);
router.use('/patient', patientRoute);

module.exports = router;