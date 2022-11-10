require('dotenv').config();
const jwt = require('jsonwebtoken');

const generate = (info, checked) => {
  const { id, email, role } = info;
  const payload = {
    id,
    email,
    role,
  };

  const config = checked ? { expiresIn: '9h' } : { expiresIn: '30m' };

  const token = jwt.sign(payload, process.env.JWT_KEY, config);

  return token;
}

const decoded = (token) => {
  return jwt.verify(token, process.env.JWT_KEY);
}

module.exports = {
  generate,
  decoded
};