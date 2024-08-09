const { scheduleAppointments, getAppointments } = require('../../controllers/patient/appointments');
const { updateMedicalProfile, getMedicalProfile } = require('../../controllers/patient/medicalProfile');
const patientMiddleware = require('../../middlewares/patientMiddleware');

const router = require('express').Router();

// appointments
router.post('/appointments/book', patientMiddleware, scheduleAppointments)
router.get('/appointments/view', patientMiddleware, getAppointments)

// medical profile
router.post('/medical-profile/update', patientMiddleware, updateMedicalProfile)
router.get('/medical-profile/', patientMiddleware, getMedicalProfile)

module.exports = router;