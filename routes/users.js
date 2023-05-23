const router = require('express').Router();
const userController = require('../controllers/users');

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUserById);

router.post('/', userController.postUser);

router.patch('/me', userController.edithUser);

router.patch('/me/avatar', userController.editAvatarhUser);

module.exports = router;
