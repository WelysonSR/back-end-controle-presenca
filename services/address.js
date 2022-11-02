const { Addresses } = require('../database/models');

const creat = async ({ logradouro, complemento, bairro, localidade, cep, uf, userId  }) => {
  const regaxCep = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

  if(!regaxCep.test(cep)) throw new Error('401|Formato invalido!');

  if(!logradouro || !bairro || !localidade || !cep || !uf || !userId) {
    throw new Error('401|Campo obrigatório!');
  }

  const add = await Addresses.findOne({ where: { userId } });
  
  if(!add){
    const { dataValues } = await Addresses
    .create({ logradouro, complemento, bairro, localidade, cep, uf, userId  });
    return dataValues ? { code: 200, response: 'Dados atualizado com sucesso!'}
      : { code: 500, response: 'Erro interno!'};
  } else {
    const result = await Addresses
    .update(
      { logradouro, complemento, bairro, localidade, cep, uf, userId  },
      { where: {id: userId} }
    );
    return result ? { code: 200, response: 'Dados atualizado com sucesso!'}
      : { code: 500, response: 'Erro interno!'};
  }
}

module.exports = {
  creat
}
