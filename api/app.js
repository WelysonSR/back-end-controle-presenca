require('express-async-errors');
const express = require('express');
const error = require('../middlewares/error');
const user = require('../routes/user');
const address = require('../routes/address');
const dates = require('../routes/dates');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'App ok' })
})

app.use('/user', user);

app.use('/address', address)

app.use('/dates', dates)

app.use(error);

module.exports = app;
