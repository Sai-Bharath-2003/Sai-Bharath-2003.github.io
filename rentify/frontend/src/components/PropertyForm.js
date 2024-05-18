import React, { useState } from 'react';
import axios from 'axios';

const PropertyForm = () => {
  const [place, setPlace] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [nearby, setNearby] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/seller/property', { place, area, bedrooms, bathrooms, nearby: nearby.split(',') }, {
        headers: {
          Authorization: token
        }
      });
      alert('Property posted successfully');
    } catch (error) {
      alert('Error posting property');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Place" required />
      <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required />
      <input type="text" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} placeholder="Bedrooms" required />
      <input type="text" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} placeholder="Bathrooms" required />
      <input type="text" value={nearby} onChange={(e) => setNearby(e.target.value)} placeholder="Nearby (comma separated)" required />
      <button type="submit">Post Property</button>
    </form>
  );
};

export default PropertyForm;
