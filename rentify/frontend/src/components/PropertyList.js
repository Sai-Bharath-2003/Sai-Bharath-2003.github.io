import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('/api/buyer/properties');
        setProperties(res.data);
      } catch (error) {
        alert('Error fetching properties');
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {properties.map(property => (
        <div key={property._id}>
          <h2>{property.place}</h2>
          <p>Area: {property.area}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <button onClick={() => alert(`Contact Seller: ${property.seller.email}`)}>I'm Interested</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
