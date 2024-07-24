const joi = require('joi');
const { Error, Success } = require('../../utils/response');

const signInController = (req, res) => {
  const schema = joi.object({
    patientNo: joi.number().required().min(0o1).max(999999),
    password: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return Error(res, 400, error.details[0].message);

  return Success(res, 200, 'Sign in successful');
}

module.exports = { signIn: signInController }