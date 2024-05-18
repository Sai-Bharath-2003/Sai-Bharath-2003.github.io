const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String,
  role: { type: String, enum: ['buyer', 'seller'], required: true },
});
module.exports = mongoose.model('User', userSchema);
