const deleteDoctor = require('../../controllers/Admin/doctor/deleteDoctor');
const updateDoctor = require('../../controllers/Admin/doctor/updateDoctor');
const deletePatient = require('../../controllers/Admin/patient/deletePatient');
const updatePatient = require('../../controllers/Admin/patient/updatePatient');
const adminSignIn = require('../../controllers/auth/adminSignIn');
const doctorSignUp = require('../../controllers/auth/doctorSignup');

const router = require('express').Router();
require('dotenv').config();

router.post('/signin', adminSignIn)

// doctor routes
router.post('/doctor/signup', doctorSignUp);
router.delete('/doctor/delete/:doctorNo', deleteDoctor)
router.put('/doctor/update/:id', updateDoctor)

// doctor routes
router.delete('/patient/delete/:patientNo', deletePatient)
router.put('/patient/update/:id', updatePatient)


module.exports = router;