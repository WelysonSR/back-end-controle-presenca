const { User } = require('../database/models');
const md5 = require('md5');

const regaxEmail = /\S+@\S+\.\S+/;
const regaxPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

const register = async ({ firstName, lestName, email, password, role }) => {
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

  const newUser = {
    firstName,
    lestName,
    email,
    password: md5(password),
    role
  };

  const { dataValues } = await User.create(newUser);

  if (dataValues.id) return { code: 200, response: 'Usuário criado com sucesso!'};
};

module.exports = {
  register
}