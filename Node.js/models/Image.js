// backend/models/image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
