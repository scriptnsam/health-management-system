const { scheduleAppointments, getAppointments } = require('../../controllers/patient/appointments');
const patientMiddleware = require('../../middlewares/patientMiddleware');

const router = require('express').Router();

router.post('/appointments/book', patientMiddleware, scheduleAppointments)
router.get('/appointments/view', patientMiddleware, getAppointments)

module.exports = router;