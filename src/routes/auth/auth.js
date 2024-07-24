const router = require('express').Router();
require('dotenv').config();

const { signIn: patientSignIn } = require('../../controllers/auth/signInController');
const { signUp: patientSignUp } = require('../../controllers/auth/signUpController');

router.post('/patient/signup', patientSignUp);
router.post('/patient/signin', patientSignIn);

module.exports = router;