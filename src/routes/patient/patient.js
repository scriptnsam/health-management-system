const { scheduleAppoinments } = require('../../controllers/patient/appointments');
const patientMiddleware = require('../../middlewares/patientMiddleware');

const router = require('express').Router();

router.post('/book-appointment', patientMiddleware, scheduleAppoinments)

module.exports = router;