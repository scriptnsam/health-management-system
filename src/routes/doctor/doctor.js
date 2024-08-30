const router = require('express').Router();

const getDoctors = require('../../controllers/doctor/getDoctors');
const { viewAppointments, viewAppointmentsHistory } = require('../../controllers/doctor/appointments');
const doctorMiddleware = require('../../middlewares/doctorMiddleware');

router.get('/', getDoctors);
router.get('/appointments', doctorMiddleware, viewAppointments);
router.get('/appointmentHistory', doctorMiddleware, viewAppointmentsHistory);

module.exports = router;