const { Doctor } = require("../../models/Doctor");
const { Error, Success } = require("../../utils/response");

const getDoctors = async (req, res) => {
  // get doctors from database
  try {
    const doctors = await Doctor.findAll();
    return Success(res, 200, 'Doctors Fetched Successfully', { doctors })
  } catch (error) {
    return Error(res, 500, error.message)
  }
};

const getDoctorsById = async (req, res) => {
  // get doctors from database
  try {
    const doctor = await Doctor.findOne({ where: { doctorId: req.doctor.id } })
    return Success(res, 200, 'Doctor Fetched Successfully', { doctor })
  } catch (error) {
    return Error(res, 500, error.message)
  }
};

module.exports = { getDoctors, getDoctorsById };