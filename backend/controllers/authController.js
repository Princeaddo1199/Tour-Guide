const User = require('../models/User');
const jwt = require('jsonwebtoken');

//Helper: Generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
    );
};

//@desc Register New user
//@route Post/api/auth/register
//@access public

const registerUser =async (req, res) => {
    const {name, email, password} = req.body;

    try {
        //check if user already exist
        const userExists = await User.findOne({email});
        if (userExists){
            return res.status(400).json({message: 'Email already exist!'});
        }

        //create user 
        const user = await User.create({name, email, password});

        res.status(201).json({
            message: 'User Successfully Registered',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token: generateToken(user)
        });
    }
    catch (err){
        res.status(500).json({message: 'Server Error', error: err.message});
    }
};

//desc Login user
//@route POST /api/auth/login
//@access Public

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {

        //find user by email and include password
        const user = await User.findOne({email}).select('+password');

        if (!user){
            return res.status(400).json({message: 'Invalid email'});
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch){
            return res.status(400).json({message: "Invalid password"});
        }

        res.status(200).json({
            message: 'Login Successful',
            user: {
                user: user._id,
                name: user.name,
                email: user.email,
                rol: user.role
            },
            token: generateToken(user)
        });
    } catch (err){
        res.status(500).json({message: 'Server error', error: err.message});
    }
};

// @desc    Forgot password (optional for now)
// @route   POST /api/auth/forgot-password
// @access  Public
// Placeholder for forgot password
const forgotPassword = async (req, res) => {
  res.status(200).json({ message: 'Forgot password endpoint placeholder' });
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
};