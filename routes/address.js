const router = require('express').Router();
const addressController = require('../controllers/address');

router.post('/', addressController.creat);
router.get('/', addressController.getAddresses);

module.exports = router;
