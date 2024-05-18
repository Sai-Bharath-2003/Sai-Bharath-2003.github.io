const Property = require('../models/property');

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPropertyDetails = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('seller', 'firstName lastName email phoneNumber');
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
