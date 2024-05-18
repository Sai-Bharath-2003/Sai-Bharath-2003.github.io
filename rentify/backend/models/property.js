const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema({
  place: String,
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  nearby: [String],
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = mongoose.model('Property', propertySchema);
