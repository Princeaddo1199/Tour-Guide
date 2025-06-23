const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');


router.get('/', async (req, res) => {
  const { location, type, price, page = 1, limit = 10 } = req.query;

  const query = {};

  if (location) {
    query.location = new RegExp(location, 'i'); 
  }

  if (type) {
    query.type = new RegExp(type, 'i');
  }

  if (price) {
    query.price = { $lte: parseInt(price) };
  }

  const skip = (page - 1) * limit;

  try {
    const tours = await Tour.find(query).skip(skip).limit(parseInt(limit));
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
