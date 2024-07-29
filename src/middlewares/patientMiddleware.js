const jwt = require('jsonwebtoken');
const { Error } = require('../utils/response');

const patientMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return Error(res, 401, 'Please pass in authorization token');
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return Error(res, 401, 'Invalid token format');
  }

  try {
    const decoded = jwt.verify(token, process.env.PATIENT_JWT_SECRET);
    req.patient = decoded;
    next();
  } catch (e) {
    return Error(res, 401, 'Invalid token');
  }
};

module.exports = patientMiddleware;