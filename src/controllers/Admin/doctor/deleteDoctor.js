const { Doctor } = require("../../../models/Doctor");
const { Success, Error } = require("../../../utils/response");

/**
 * The function `deleteDoctor` deletes a doctor record based on the provided doctor number and returns
 * a success message if the deletion is successful.
 * @param req - The `req` parameter in the `deleteDoctor` function is typically an object representing
 * the HTTP request. It contains information about the request made to the server, such as the request
 * headers, parameters, body, and other details. In this specific function, `req.params` is used to
 * extract the
 * @param res - The `res` parameter in the `deleteDoctor` function is typically the response object in
 * an Express route handler. It is used to send a response back to the client making the request.
 * @returns The `deleteDoctor` function is returning different responses based on the outcome of the
 * operation:
 */
const deleteDoctor = async (req, res) => {
  const { doctorNo } = req.params;

  try {
    const doctor = await Doctor.findOne({ where: { doctorNo } })
    if (!doctor) {
      return Error(res, 404, "Doctor not found")
    }
    await doctor.destroy();
    return Success(res, 200, "Doctor deleted successfully", { doctor })
  } catch (e) {
    return Error(res, 500, e.message)
  }
}

module.exports = deleteDoctor;