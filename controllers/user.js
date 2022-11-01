const userServices = require('../services/user')

const register = async (req, res) => {
  const { firstName, lestName, email, password, role } = req.body;
  const { code, response } = await userServices
    .register({ firstName, lestName, email, password, role });
  return res.status(code).json({ message: response });
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const { code, token } = await userServices.login({ email, password });
  return res.status(code).json({ token });
}

module.exports = {
  register,
  login
};