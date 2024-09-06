const { Patient } = require("../../../models/Patient");
const { Error, Success } = require("../../../utils/response");


const getPatients = async (req, res) => {
  // get patients from database
  try {
    const patients = await Patient.findAll();
    return Success(res, 200, 'Patients Fetched Successfully', { patients })
  } catch (error) {
    return Error(res, 500, error.message)
  }
};

module.exports = getPatients;