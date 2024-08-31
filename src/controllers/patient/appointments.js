const Joi = require("joi");
const { Error, Success } = require("../../utils/response");
const Appoinment = require("../../models/Appoinment");
const { Doctor } = require("../../models/Doctor");
const { validate } = require('uuid');

// Schedule appoinments controller
const scheduleAppointments = async (req, res) => {
  // Logic to schedule appoinments
  const { patientId } = req.patient;

  const schema = Joi.object({
    doctorId: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    reason: Joi.string().required()
  })

  const { error } = schema.validate(req.body);
  if (error) return Error(res, 400, error.details[0].message);

  const { doctorId, date, time, reason } = req.body;

  // const parsedPatientId = parseInt(patientId)

  if (!validate(doctorId)) {
    return Error(res, 400, 'Invalid doctor id')
  }

  try {
    // Check if doctor exist
    const doctor = await Doctor.findOne({ where: { doctorId } });
    if (!doctor) return Error(res, 400, 'Doctor does not exist');

    const [_, created] = await Appoinment.findOrCreate({ where: { patientId, doctorId, appointmentStatus: 'Active' }, defaults: { patientId, doctorId, appointmentDate: date, appointmentTime: time, appointmentReason: reason } })

    if (!created) {
      return Error(res, 400, 'Sorry, you still have an active appointment with the doctor')
    }
    return Success(res, 200, "Appointment scheduled")
  } catch (error) {
    console.error(error)
    return Error(res, 500, error.message)
  }

}

const getAppointments = async (req, res) => {
  // Logic to get appoinments
  const { patientId } = req.patient;

  try {
    const appointments = await Appoinment.findAll({ where: { patientId } })
    if (!appointments) return Error(res, 400, 'No appointments found');
    return Success(res, 200, 'Appointment(s) Found', { appointments })
  } catch (error) {
    return Error(res, 500, error.message)
  }
}

module.exports = {
  scheduleAppointments, getAppointments
}