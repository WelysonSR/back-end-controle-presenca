const datesServices = require('../services/dates');

const getDates = async (req, res) => {
  const { id } = req.params;
  const { code, response } = await datesServices.getDates({id});
  return res.status(code).json(response);
}

module.exports = {
  getDates,
};