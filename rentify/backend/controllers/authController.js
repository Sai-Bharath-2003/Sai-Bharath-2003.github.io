const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../config/db');

exports.register = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, role } = req.body;

  const sql = 'INSERT INTO users (firstName, lastName, email, phoneNumber, password, role) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, phoneNumber, password, role], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
