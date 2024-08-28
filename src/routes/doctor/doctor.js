const router = require('express').Router();

const getDoctors = require('../../controllers/doctor/getDoctors');

router.get('/', getDoctors);

module.exports = router;