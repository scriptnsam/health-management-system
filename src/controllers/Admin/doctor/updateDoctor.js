const joi = require('joi');
const { Error, Success } = require('../../../utils/response');
const { Doctor } = require('../../../models/Doctor');

const updateDoctor = async (req, res) => {
  const { id: doctorId } = req.params;

  const schema = joi.object({
    email: joi.string().email(),
    specialization: joi.string(),
    experience: joi.number().integer().min(0),
    qualification: joi.string(),
    phone: joi.string(),
    address: joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return Error(res, 400, error.details[0].message);
  }
  const { email, specialization, experience, qualification, phone, address } = req.body;

  try {
    // Find doctor by ID
    const doctor = await Doctor.findOne({ where: { doctorId } });
    if (!doctor) {
      return Error(res, 404, "Doctor not found");
    }

    // Update doctor fields
    await doctor.update({
      email,
      specialization,
      experience,
      qualification,
      phone,
      address
    });

    return Success(res, 200, 'Doctor updated successfully', { doctor });

  } catch (e) {
    return Error(res, 500, e.message);
  }


}

module.exports = updateDoctor;