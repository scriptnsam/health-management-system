const bcrypt = require('bcrypt');

/**
 * The function `hashPassword` takes a password as input, hashes it using bcrypt with a salt round of
 * 10, and returns the hashed password.
 * @param password - The `hashPassword` function you provided is using the `bcrypt` library to hash a
 * password with a given number of salt rounds. However, the function is not returning the hashed
 * password correctly. To fix this, you can modify the function to return a Promise that resolves with
 * the hashed password. Here
 */
const hashPassword = async (password) => {
  const saltRounds = 10;
  const myPlaintextPassword = password;
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  return hash;
}

/**
 * The function `comparePassword` compares a plaintext password with a hashed password using bcrypt and
 * returns the result.
 * @param password - The `password` parameter is the plain text password that a user enters when trying
 * to log in.
 * @param hashedPassword - The `hashedPassword` parameter in the `comparePassword` function is
 * typically a string that represents the hashed version of a password. This hashed password is usually
 * stored in a database or used for comparison with a plaintext password to verify its authenticity.
 * @returns The `comparePassword` function is not returning anything explicitly. The `bcrypt.compare`
 * function inside the `comparePassword` function is asynchronous and the result is being returned
 * within its callback function. To properly handle the result, you can modify the `comparePassword`
 * function to return a Promise that resolves with the result of the comparison. Here's an example of
 * how you can do this:
 */
const comparePassword = async (password, hashedPassword) => {
  const myPlaintextPassword = password;
  const hash = hashedPassword;
  const result = await bcrypt.compare(myPlaintextPassword, hash);
  return result;
}

module.exports = { hashPassword, comparePassword }