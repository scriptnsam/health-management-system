const Joi = require("joi");
const { Error, Success } = require("../../utils/response");
const Profile = require("../../models/Profile");

const updateMedicalProfile = async (req, res) => {
  const { patientId } = req.patient;

  const schema = Joi.object({
    bloodType: Joi.string().required(),
    genoType: Joi.string().required(),
    allergies: Joi.array().items(Joi.string()),
    medications: Joi.array().items(Joi.string()),
    conditions: Joi.array().items(Joi.string()),
    weight: Joi.number().required(),
    height: Joi.number().required(),
    surgeries: Joi.array().items(Joi.string()),
    currentMedications: Joi.array().items(Joi.string())
  });

  const { error } = schema.validate(req.body);
  if (error) return Error(res, 400, error.details[0].message);

  try {
    const { bloodType, genoType, allergies, medications, conditions, weight, height, surgeries, currentMedications } = req.body;
    // Find patient by ID
    const profile = await Profile.findOne({ where: { patientId } });
    if (!profile) {
      // create a profile for the patient
      await Profile.create({ patientId, blood_type: bloodType, geno_type: genoType, allergies, medications, conditions, weight, height, surgeries, current_medications: currentMedications });
    } else {
      await profile.update({ blood_type: bloodType, geno_type: genoType, allergies, medications, conditions, weight, height, surgeries, current_medications: currentMedications });
    }

    return Success(res, 200, "Medical profile updated successfully");
  } catch (error) {
    return Error(res, 500, error.message);
  }
}

const getMedicalProfile = async (req, res) => {
  const { patientId } = req.patient;
  try {
    const profile = await Profile.findOne({ where: { patientId } });
    if (!profile) return Error(res, 404, "Patient medical profile not found");
    return Success(res, 200, "Medical profile retrieved successfully", { medicalProfile: profile });
  } catch (error) {
    return Error(res, 500, error.message);
  }
}

module.exports = { updateMedicalProfile, getMedicalProfile };