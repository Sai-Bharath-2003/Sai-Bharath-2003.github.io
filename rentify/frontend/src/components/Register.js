import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { firstName, lastName, email, phoneNumber, password, role });
      alert('Registration successful');
    } catch (error) {
      alert('Error registering');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
