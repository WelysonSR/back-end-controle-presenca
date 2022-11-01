require('express-async-errors');
const express = require('express');
const error = require('../middlewares/error');
const user = require('../routes/user')

const app = express();

app.use(express.json());

app.use('/user', user)

app.use(error);

module.exports = app;
