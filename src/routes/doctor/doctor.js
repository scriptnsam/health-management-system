const router = require('express').Router();

const { getDoctors, getDoctorsById } = require('../../controllers/doctor/getDoctors');
const { viewAppointments, viewAppointmentsHistory, cancelAppointment, completeAppointment } = require('../../controllers/doctor/appointments');
const doctorMiddleware = require('../../middlewares/doctorMiddleware');

router.get('/', getDoctors);
router.get('/getById', doctorMiddleware, getDoctorsById)
router.get('/appointments', doctorMiddleware, viewAppointments);
router.get('/appointmentHistory', doctorMiddleware, viewAppointmentsHistory);
router.put('/appointments/:id/cancel', doctorMiddleware, cancelAppointment);
router.put('/appointments/:id/complete', doctorMiddleware, completeAppointment);

module.exports = router;