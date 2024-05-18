const express = require('express');
const { postProperty, getProperties, updateProperty, deleteProperty } = require('../controllers/sellerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/property', authMiddleware, postProperty);
router.get('/properties', authMiddleware, getProperties);
router.put('/property/:id', authMiddleware, updateProperty);
router.delete('/property/:id', authMiddleware, deleteProperty);

module.exports = router;
