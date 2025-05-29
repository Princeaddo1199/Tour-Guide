const mongoose = require('mongoose');

//connect to mongoDB using mongoose
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error('❌ MongoDB connection Failed: ', err.message);
        process.exit(1); //Exits the process if the DB connection fails
    }
};

module.exports = connectDB; 