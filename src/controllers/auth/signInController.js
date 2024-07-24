const signInController = (req, res) => {
  return res.status(200).json({ message: "Sign In Controller" })
}

module.exports = { signIn: signInController }