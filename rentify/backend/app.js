const express = require('express');
const db = require('./config/db'); // Import MySQL connection
const authRoutes = require('./routes/authRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const buyerRoutes = require('./routes/buyerRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/buyer', buyerRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
