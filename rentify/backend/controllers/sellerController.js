const Property = require('../models/property');

exports.postProperty = async (req, res) => {
  const { place, area, bedrooms, bathrooms, nearby } = req.body;
  try {
    const property = new Property({ place, area, bedrooms, bathrooms, nearby, seller: req.user.id });
    await property.save();
    res.status(201).json({ message: 'Property posted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find({ seller: req.user.id });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
