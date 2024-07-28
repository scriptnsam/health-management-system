const joi = require('joi');
const { Error, Success } = require('../../../utils/response');
const { Patient } = require('../../../models/Patient');

const updatePatient = async (req, res) => {
  const { id: patientId } = req.params;

  const schema = joi.object({
    address: joi.string(),
    city: joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return Error(res, 400, error.details[0].message);
  }
  const { city, address } = req.body;

  try {
    // Find patient by ID
    const patient = await Patient.findOne({ where: { patientId } });
    if (!patient) {
      return Error(res, 404, "Patient not found");
    }

    // Update patient fields
    await patient.update({
      city,
      address
    });

    return Success(res, 200, 'Patient updated successfully', { patient });

  } catch (e) {
    return Error(res, 500, e.message);
  }


}

module.exports = updatePatient;