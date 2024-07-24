const { Patient, generatePatientNo } = require("../../models/Patient")
const joi = require('joi');
const { Error, Success } = require('../../utils/response');
const { hashPassword } = require("../../utils/hashPasword");

const signUpController = async (req, res) => {
  // create a new user
  try {
    const schema = joi.object({
      email: joi.string().email().required(),
      fullName: joi.string().required(),
      address: joi.string().required(),
      city: joi.string().required(),
      gender: joi.string().required(),
      password: joi.string().required().min(8),
    })

    const { error } = schema.validate(req.body)

    if (error) {
      return Error(res, 400, error.details[0].message)
    }
    const { email, fullName, address, city, gender, password } = req.body

    // hash password
    const hashedPassword = await hashPassword(password);
    const newPatientNo = await generatePatientNo();

    const [_, created] = await Patient.findOrCreate({
      where: { email },
      defaults: { patientNo: newPatientNo, email, fullName, address, city, gender, password: hashedPassword, role: 'patient' }
    })

    if (!created) {
      return Error(res, 400, 'Patient with this email already exists');
    }

    return Success(res, 201, 'Patient created successfully', { patientNo: newPatientNo })

  } catch (error) {
    return Error(res, 500, error.message)
  }
}

module.exports = { signUp: signUpController }