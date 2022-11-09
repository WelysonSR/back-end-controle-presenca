const router = require('express').Router();
const datesController = require('../controllers/dates');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', verifyToken, datesController.getDates);

module.exports = router;
