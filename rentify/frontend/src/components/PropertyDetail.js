import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`/api/buyer/property/${id}`);
        setProperty(res.data);
      } catch (error) {
        alert('Error fetching property details');
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h2>{property.place}</h2>
      <p>Area: {property.area}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Nearby: {property.nearby.join(', ')}</p>
      <h3>Seller Information</h3>
      <p>Name: {property.seller.firstName} {property.seller.lastName}</p>
      <p>Email: {property.seller.email}</p>
      <p>Phone: {property.seller.phoneNumber}</p>
    </div>
  );
};

export default PropertyDetail;
