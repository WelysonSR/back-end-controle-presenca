const addressServices = require('../services/address');

const creat = async (req, res) => {
  const { logradouro, complemento, bairro, localidade, cep, uf, userId  } = req.body;
  const { code, response } = await addressServices
    .creat({ logradouro, complemento, bairro, localidade, cep, uf, userId  });
  return res.status(code).json({ message: response });
}

const getAddresses = async (_req, res) => {
  const { code, response } = await addressServices.getAddresses();
  return res.status(code).json({ message: response });
}

module.exports = {
  creat,
  getAddresses
};