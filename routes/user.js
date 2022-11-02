const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/creat', userController.register);
router.post('/login', userController.login);

module.exports = router;
