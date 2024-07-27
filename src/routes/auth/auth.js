const router = require('express').Router();
require('dotenv').config();

const doctorSignIn = require('../../controllers/auth/doctorSignin');
const doctorSignUp = require('../../controllers/auth/doctorSignup');
const { signIn: patientSignIn } = require('../../controllers/auth/signInController');
const { signUp: patientSignUp } = require('../../controllers/auth/signUpController');

router.post('/patient/signup', patientSignUp);
router.post('/patient/signin', patientSignIn);

router.post('/doctor/signup', doctorSignUp);
router.post('/doctor/signin', doctorSignIn);
module.exports = router;