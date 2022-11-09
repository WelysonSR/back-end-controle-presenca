const datesServices = require('../services/dates');

const getDates = async (req, res) => {
  const { id } = req.params;
  const { code, response } = await datesServices.getDates({id});
  return res.status(code).json(response);
}

const setDates = async (req, res) => {
  const { dia, data, horaEntrada, horaSaida, transporte, bancoHora, userId } = req.body;
  const { code, response } = await datesServices
    .setDates({ dia, data, horaEntrada, horaSaida, transporte, bancoHora, userId });
  return res.status(code).json({ message: response });
}

module.exports = {
  getDates,
  setDates,
};