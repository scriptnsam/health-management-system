const joi = require('joi');
const { Error, Success } = require('../../utils/response');
const { hashPassword } = require("../../utils/hashPasword");
const { Doctor, generateDoctorNo } = require('../../models/Doctor');

const doctorSignUp = async (req, res) => {
  try {
    const schema = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().min(8).required(),
      specialization: joi.string().required(),
      experience: joi.number().required(),
      qualification: joi.string().required(),
      phone: joi.string().required(),
      address: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return Error(res, 400, error.details[0].message);
    const { name, email, password, specialization, experience, qualification, phone, address } = req.body;
    const hashedPassword = await hashPassword(password);
    const newDoctorNo = await generateDoctorNo();

    const [doctor, created] = await Doctor.findOrCreate({
      where: { email },
      defaults: {
        doctorNo: newDoctorNo,
        fullName: name,
        email,
        password: hashedPassword,
        specialization,
        experience,
        qualification,
        phone,
        address,
      }
    });

    if (!created) return Error(res, 400, "Doctor already exists");

    return Success(res, 201, "Doctor created successfully", { doctorNo: doctor.doctorNo });
  } catch (error) {
    return Error(res, 500, error.message)
  }
}

module.exports = doctorSignUp;