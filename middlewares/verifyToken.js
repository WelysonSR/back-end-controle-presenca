const generateToken = require('../utils/token');

const verifyToken = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw new Error('401|Token não encontrado');
  const token = generateToken.decoded(authorization);

  req = { ...req, token };

  next();
}

module.exports = verifyToken;