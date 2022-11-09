const { DailyControl } = require('../database/models');

const getDates = async ({id}) => {
  const response = await DailyControl.findAll({ where: { userId: id } });
  return { code: 200, response };
}

const setDates = async ({ dia, data, horaEntrada, horaSaida, transporte, bancoHora, userId }) => {

  if (!data) {
    throw new Error('404|Campo data e obrigatório! ');
  }

  const dataExist = await DailyControl.findOne({ where: { data } });

  if (!dataExist) {
    await DailyControl.create({
      dia, data, horaEntrada, horaSaida, transporte, bancoHora, userId
    });
    return { code: 200, response: 'Horário salvo com sucesso!'}
  } else {
    await DailyControl.update(
      { dia, data, horaEntrada, horaSaida, transporte, bancoHora, userId },
      { where: { data } }
    );
    return { code: 200, response: 'Horário salvo com sucesso!'}
  }
};

module.exports = {
  getDates,
  setDates,
}
