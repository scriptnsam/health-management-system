const { Patient } = require("../../../models/Patient");
const { Success, Error } = require("../../../utils/response");

const deletePatient = async (req, res) => {
  const { patientNo } = req.params;

  try {
    const patient = await Patient.findOne({ where: { patientNo } })
    if (!patient) {
      return Error(res, 404, "Patient not found")
    }
    await patient.destroy();
    return Success(res, 200, "Patient deleted successfully", { patient })
  } catch (e) {
    return Error(res, 500, e.message)
  }
}

module.exports = deletePatient;