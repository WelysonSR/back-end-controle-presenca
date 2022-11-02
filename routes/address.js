const router = require('express').Router();
const addressController = require('../controllers/address');

router.post('/', addressController.creat);

module.exports = router;
