const deleteDoctor = require('../../controllers/Admin/doctor/deleteDoctor');
const updateDoctor = require('../../controllers/Admin/doctor/updateDoctor');
const deletePatient = require('../../controllers/Admin/patient/deletePatient');
const updatePatient = require('../../controllers/Admin/patient/updatePatient');
const adminSignIn = require('../../controllers/auth/adminSignIn');
const doctorSignUp = require('../../controllers/auth/doctorSignup');
const adminMiddleware = require('../../middlewares/adminMiddleware');

const router = require('express').Router();
require('dotenv').config();

router.post('/signin', adminSignIn)

// doctor routes
router.post('/doctor/signup', adminMiddleware, doctorSignUp);
router.delete('/doctor/delete/:doctorNo', adminMiddleware, deleteDoctor)
router.put('/doctor/update/:id', adminMiddleware, updateDoctor)

// doctor routes
router.delete('/patient/delete/:patientNo', adminMiddleware, deletePatient)
router.put('/patient/update/:id', adminMiddleware, updatePatient)


module.exports = router;