const router = require('express').Router();
const userController = require('../controllers/user');
const verifyToken = require('../middlewares/verifyToken');

router.post('/creat', verifyToken, userController.register);
router.post('/login', userController.login);
router.get('/users', verifyToken, userController.getUsers);
router.post('/update', verifyToken, userController.updateUser);

module.exports = router;
