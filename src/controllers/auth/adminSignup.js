const joi = require('joi');
const { Error, Success } = require('../../utils/response');
const Admin = require('../../models/Admin');
const { hashPassword } = require('../../utils/hashPasword');

const adminSignup = async (req, res) => {
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

    // HAH THE PASSWORD
    const hash = await hashPassword(password)

    const [_, created] = await Admin.findOrCreate({ where: { username }, defaults: { username, password: hash } });

    if (!created) {
      return Error(res, 404, 'Admin with this username already registered');
    }

    return Success(res, 200, 'Admin registered successfully');
  } catch (error) {
    return Error(res, 500, error.message);
  }
};

module.exports = adminSignup;