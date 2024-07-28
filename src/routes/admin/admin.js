const adminSignIn = require('../../controllers/auth/adminSignIn');

const router = require('express').Router();
require('dotenv').config();

router.post('/signin', adminSignIn)

module.exports = router;