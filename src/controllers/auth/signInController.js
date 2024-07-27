const joi = require('joi');
const { Error, Success } = require('../../utils/response');
const { Patient } = require('../../models/Patient');
const { comparePassword } = require('../../utils/hashPasword');
const jwt = require('jsonwebtoken');

const signInController = async (req, res) => {
  const schema = joi.object({
    patientNo: joi.number().required().min(0o1).max(999999),
    password: joi.string().required().min(8),
  });

  const { error } = schema.validate(req.body);
  if (error) return Error(res, 400, error.details[0].message);

  const { patientNo, password } = req.body;

  // check if patient is resgistered already
  const patient = await Patient.findOne({ where: { patientNo } })
  if (patient === null) return Error(res, 404, 'Patient not found');

  // patient found
  const { patientId } = patient;
  const dbPassword = patient.password;

  // compare password
  const compareResult = await comparePassword(password, dbPassword);
  if (!compareResult) return Error(res, 400, 'Invalid password');

  // login successful, generate jwt signed authorization token
  const token = jwt.sign({ patientNo, patientId }, process.env.PATIENT_JWT_SECRET, { expiresIn: '1h' });

  return Success(res, 200, 'Sign in successful', { token });
}

module.exports = { signIn: signInController }