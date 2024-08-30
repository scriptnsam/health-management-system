const Appoinment = require("../../models/Appoinment");
const { Error, Success } = require("../../utils/response");

const viewAppointments = async (req, res) => {
  try {
    const appointments = await Appoinment.find({ doctorId: req.doctor.id, appointmentStatus: 'Active' });
    if (appointments.length == 0) {
      return Success(res, 404, 'No appointment found')
    }

    return Success(res, 200, 'Appointment(s) Found', { appointments })

  } catch (error) {
    return Error(res, 500, error.message)
  }
}

const viewAppointmentsHistory = async (req, res) => {
  try {
    const appointments = await Appoinment.find({ doctorId: req.doctor.id });
    if (appointments.length == 0) {
      return Success(res, 404, 'No appointment found')
    }

    return Success(res, 200, 'Appointment(s) Found', { appointments })

  } catch (error) {
    return Error(res, 500, error.message)
  }
}


module.exports = {
  viewAppointments, viewAppointmentsHistory
}