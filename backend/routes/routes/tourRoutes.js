// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const tours = require('../data/tours');

router.get('/tours', (req, res) => {
  res.status(200).json(tours);
});

module.exports = router;
