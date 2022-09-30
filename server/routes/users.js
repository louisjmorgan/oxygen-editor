const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController')

// // get user list
// router.get('/', user_controller.users_get);

// create new user
router.post('/', user_controller.user_register_post);

// user login
router.post('/login', user_controller.user_login_post);

module.exports = router;
