const { User, DailyControl } = require('../database/models');
const md5 = require('md5');
const generateToken = require('../utils/token');

const regaxEmail = /\S+@\S+\.\S+/;
const regaxPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const regaxCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

const register = async ({ firstName, lestName, email, password, cpf, phone, role }) => {
  const userExist = await User.findOne({ where: { email } });
  if (userExist) throw new Error('401|Email já cadastrado!');
  
  if(!firstName || !lestName || !email || !password || !role) {
    throw new Error('401|Campo obrigatório!');
  }

  if (firstName.length < 3 || lestName.length < 4) {
    throw new Error('401|Formato de nome incorreto!');
  }

  if (!regaxEmail.test(email)) {
    throw new Error('401|Formato de e-mail incorreto!');
  }

  if (!regaxPassword.test(password)) {
    throw new Error('401|Formato de senha incorreto!');
  }

  if (!regaxCpf.test(cpf)) {
    throw new Error('401|Formato de cpf incorreto!');
  }

  const newUser = {
    firstName,
    lestName,
    email,
    password: md5(password),
    cpf,
    phone,
    role
  };

  const { dataValues } = await User.create(newUser);

  if (dataValues.id) return { code: 200, response: 'Usuário criado com sucesso!'};
};

const login = async ({ email, password, checked }) => {
  const userExist  = await User.findOne({ where: { email } });
  if (!userExist) throw new Error('404|Email ou senha invalido!');

  const { dataValues } = userExist;

  if(md5(password) !== dataValues.password) {
    throw new Error('404|Email ou senha invalido!');
  }

  const newToken = generateToken.generate(dataValues, checked);
  const response = {
    id: dataValues.id,
    firstName: dataValues.firstName,
    lestName: dataValues.lestName,
    token: newToken,
    role: dataValues.role
  }

  return { code: 200, response }
}

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { code: 200, response: users };
}

const updateUser = async ({ id, firstName, lestName, email, password, cpf, phone, role }) => {
  const userExist = await User.findOne({ where: { id } });

  if (userExist.dataValues.email !== email) {
    const exist = await User.findOne({ where: { email } });
    if(exist)
      throw new Error('401|Email já cadastrado!');
  };
  
  if(!id || !firstName || !lestName || !email || !password || !role) {
    throw new Error('401|Campo obrigatório!');
  }

  if (firstName.length < 3 || lestName.length < 4) {
    throw new Error('401|Formato de nome incorreto!');
  }

  if (!regaxEmail.test(email)) {
    throw new Error('401|Formato de e-mail incorreto!');
  }

  if (!regaxPassword.test(password)) {
    throw new Error('401|Formato de senha incorreto!');
  }

  const newUser = {
    firstName,
    lestName,
    email,
    password: md5(password),
    cpf,
    phone,
    role
  };

  const result = await User.update(
    newUser,
    { where: { id } }
  );

  if (result) return { code: 200, response: 'Usuário atualizado com sucesso!'};
};

const getUserId = async ({id}) => {
  const user = await User.findOne({ where: { id },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt']},
    include:[
      {
        model: DailyControl, as: 'dailyControl',
        where: { userId: id }
      }
  ]});
  return { code: 200, response:user.dataValues}
}

module.exports = {
  register,
  login,
  getUsers,
  updateUser,
  getUserId
}