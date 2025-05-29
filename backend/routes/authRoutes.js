
const express = require ('express');
const router = express.Router();

const {
    registerUser, 
    loginUser, 
    forgotPassword
} = require  ('../controllers/authController');

//@desc register new user
//@router Post/api/auth/ register
//@access public
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);

module.exports = router;