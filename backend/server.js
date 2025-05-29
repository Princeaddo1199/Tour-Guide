const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require ('express-rate-limit');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

//load environment variable from .env file
dotenv.config();

//connect to MongoDB
connectDB();

//initialize express app
const app = express();

//Middleware: Parse JSON bodies in requests
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, max:100}));

// Mount authentication routes at /api/auth
app.use('/api/auth', authRoutes);
app.use(errorHandler);

//basic routes to test server
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Define port from .env or fallback to 5000
const PORT = process.env.PORT || 5000;

// Start the serve  
app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));


