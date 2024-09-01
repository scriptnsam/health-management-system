const Appoinment = require("../../models/Appoinment");
const { Error, Success } = require("../../utils/response");

const viewAppointments = async (req, res) => {
  try {
    const appointments = await Appoinment.findAll({ where: { doctorId: req.doctor.id, appointmentStatus: 'Active' } });
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
    const appointments = await Appoinment.findAll({ where: { doctorId: req.doctor.id } });
    if (appointments.length == 0) {
      return Success(res, 404, 'No appointment found')
    }

    return Success(res, 200, 'Appointment(s) Found', { appointments })

  } catch (error) {
    return Error(res, 500, error.message)
  }
}

const cancelAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appoinment.findByPk(id);
    if (!appointment) {
      return Error(res, 404, 'Appointment not found')
    }
    appointment.appointmentStatus = 'Cancelled';
    await appointment.save();
    return Success(res, 200, 'Appointment cancelled successfully')
  } catch (error) {
    return Error(res, 500, error.message)
  }
}

const completeAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appoinment.findByPk(id);
    if (!appointment) {
      return Error(res, 404, 'Appointment not found')
    }
    appointment.appointmentStatus = 'Completed';
    await appointment.save();
    return Success(res, 200, 'Appointment completed successfully')
  } catch (error) {
    return Error(res, 500, error.message)
  }
}


module.exports = {
  viewAppointments, viewAppointmentsHistory, cancelAppointment, completeAppointment
}