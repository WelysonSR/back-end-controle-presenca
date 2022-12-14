const userServices = require('../services/user')

const register = async (req, res) => {
  const { firstName, lestName, email, password, cpf, phone, role } = req.body;
  const { userId, code, response } = await userServices
    .register({ firstName, lestName, email, password, cpf, phone, role });
  return res.status(code).json({ userId, message: response });
}

const login = async (req, res) => {
  const { email, password, checked } = req.body;
  const { code, response } = await userServices.login({ email, password, checked });
  return res.status(code).json(response);
}

const getUsers = async (_req, res) => {
  const { code, response } = await userServices.getUsers();
  return res.status(code).json({ message: response });
}

const updateUser = async (req, res) => {
  const { id, firstName, lestName, email, password, cpf, phone, role } = req.body;
  const { code, response } = await userServices
    .updateUser({ id, firstName, lestName, email, password, cpf, phone, role });
  return res.status(code).json({ message: response });
}

const getUserId = async (req, res) => {
  const { id } = req.params;
  const {code, response } = await userServices.getUserId({id});
  return res.status(code).json(response);
} 

module.exports = {
  register,
  login,
  getUsers,
  updateUser,
  getUserId
};