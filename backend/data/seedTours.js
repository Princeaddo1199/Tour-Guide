
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../models/Tour');
const tours = require('./tours');

dotenv.config();

const seedTours = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Tour.deleteMany(); // clear old data
    await Tour.insertMany(tours);
    console.log('✅ Tour data inserted into MongoDB!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seedTours();
