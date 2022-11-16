const router = require('express').Router();
const userController = require('../controllers/user');
const verifyToken = require('../middlewares/verifyToken');

router.post('/creat', verifyToken, userController.register);
router.post('/login', userController.login);
router.get('/users', verifyToken, userController.getUsers);
router.patch('/update', verifyToken, userController.updateUser);
router.get('/user/:id', verifyToken, userController.getUserId);

module.exports = router;
