const User = require("../../models/User")

const signUpController = async (req, res) => {
  // create a new user
  try {
    // const user = await User.create({ email: 'daisduh@gmail.com', fullName: 'ddsd dasd', address: "addfg gdfs", city: 'Ado Ekiti', gender: 'Makle', password: 'dasdsa', role: 'user' })
    // console.log(user.toJSON())

    const user = User.build({ email: 'XXXXXXXXXXXXXXXXX', fullName: 'ddsd dasd', address: "addfg gdfs", city: 'Ado Ekiti', gender: 'Male', password: 'XXXXXX', role: 'admin' })
    await user.save()

    return res.status(200).json({ message: "Sign Up Controller" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = { signUp: signUpController }