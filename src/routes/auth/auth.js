const router = require('express').Router();
require('dotenv').config();

const { signIn } = require('../../controllers/auth/signInController');
const { signUp } = require('../../controllers/auth/signUpController');

router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;