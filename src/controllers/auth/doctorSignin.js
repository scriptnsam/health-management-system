const joi = require('joi');
const { Error, Success } = require('../../utils/response');
const { comparePassword } = require('../../utils/hashPasword');
const jwt = require('jsonwebtoken');
const { Doctor } = require('../../models/Doctor');

const doctorSignIn = async (req, res) => {
  try {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return Error(res, 400, error.details[0].message);
    }

    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ where: { email } });

    if (!doctor) {
      return Error(res, 404, 'Doctor not found');
    }

    const isMatch = await comparePassword(password, doctor.password);

    if (!isMatch) {
      return Error(res, 400, 'Invalid credentials');
    }

    const token = jwt.sign({ id: doctor.doctorId }, process.env.DOCTOR_JWT_SECRET, {
      expiresIn: '1d',
    });

    return Success(res, 200, 'Doctor signed in successfully', { token });
  } catch (error) {
    return Error(res, 500, error.message);
  }
};

module.exports = doctorSignIn;