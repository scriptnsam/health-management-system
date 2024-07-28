const joi = require('joi');
const { Error, Success } = require('../../utils/response');
const { comparePassword } = require('../../utils/hashPasword');
const jwt = require('jsonwebtoken');
const Admin = require('../../models/Admin');

const adminSignIn = async (req, res) => {
  try {
    const schema = joi.object({
      username: joi.string().required(),
      password: joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return Error(res, 400, error.details[0].message);
    }

    const { username, password } = req.body;

    const admin = await Admin.findOne({ where: { username } });

    if (!admin) {
      return Error(res, 404, 'Admin not found');
    }

    const isMatch = await comparePassword(password, admin.password);

    if (!isMatch) {
      return Error(res, 400, 'Invalid credentials');
    }

    const token = jwt.sign({ id: admin.adminId }, process.env.ADMIN_JWT_SECRET, {
      expiresIn: '1d',
    });

    return Success(res, 200, 'Admin signed in successfully', { token });
  } catch (error) {
    return Error(res, 500, error.message);
  }
};

module.exports = adminSignIn;