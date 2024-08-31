const addDoctor = require('../../controllers/Admin/doctor/addDoctor');
const deleteDoctor = require('../../controllers/Admin/doctor/deleteDoctor');
const updateDoctor = require('../../controllers/Admin/doctor/updateDoctor');
const deletePatient = require('../../controllers/Admin/patient/deletePatient');
const updatePatient = require('../../controllers/Admin/patient/updatePatient');
const adminSignIn = require('../../controllers/auth/adminSignIn');
const adminSignup = require('../../controllers/auth/adminSignup');
const adminMiddleware = require('../../middlewares/adminMiddleware');

const router = require('express').Router();
require('dotenv').config();

router.post('/signin', adminSignIn)
router.post('/signup', adminSignup)

// doctor routes
router.post('/doctor/add', adminMiddleware, addDoctor);
router.delete('/doctor/delete/:doctorNo', adminMiddleware, deleteDoctor)
router.put('/doctor/update/:id', adminMiddleware, updateDoctor)

// patient routes
router.delete('/patient/delete/:patientNo', adminMiddleware, deletePatient)
router.put('/patient/update/:id', adminMiddleware, updatePatient)


module.exports = router;