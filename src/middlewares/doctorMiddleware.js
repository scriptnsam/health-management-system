const jwt = require('jsonwebtoken');
const { Error } = require('../utils/response');

const doctorMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return Error(res, 401, 'Please pass in authorization token');
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return Error(res, 401, 'Invalid token format');
  }

  try {
    const decoded = jwt.verify(token, process.env.DOCTOR_JWT_SECRET);
    req.doctor = decoded;
    next();
  } catch (e) {
    return Error(res, 401, 'Login to continue');
  }
};

module.exports = doctorMiddleware;