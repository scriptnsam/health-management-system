const { Patient } = require("../../models/Patient");

const getPatientDetails = async (req, res) => {
  const { patientId } = req.patient;
  try {
    const patient = await Patient.findOne({ where: { patientId } });
    if (!patient) return Error(res, 404, "Patient found");
    return Success(res, 200, "Patient's record retrieved successfully", { medicalProfile: patient });
  } catch (error) {
    return Error(res, 500, error.message);
  }
}

module.exports = getPatientDetails;