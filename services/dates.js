const { DailyControl } = require('../database/models');

const getDates = async ({id}) => {
  const response = await DailyControl.findAll({ where: { userId: id } });
  return { code: 200, response };
}

module.exports = {
  getDates,
}
