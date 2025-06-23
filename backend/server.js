const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tourRoutes = require('./routes/tourRoutes');

dotenv.config(); 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const app = express();
app.use(express.json());

app.use('/api/tours', tourRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
