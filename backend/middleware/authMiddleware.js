const jwt =require ('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    //check if authorization header exists and starts with bearer
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {

            //Get token from header
            token = req.headers.authorization.split(' ')[1];

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //attach user to request, minus password
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({success: false, message: 'Not Authorized, token failed'});
        }
    }

    if(!token){
        res.status(401).json({success: false, message: 'Not Authorized, No token'});
    }
};

module.exports = protect;