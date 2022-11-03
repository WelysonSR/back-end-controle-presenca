const router = require('express').Router();
const addressController = require('../controllers/address');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, addressController.creat);
router.get('/', verifyToken, addressController.getAddresses);

module.exports = router;
