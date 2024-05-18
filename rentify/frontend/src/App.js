import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';
import PropertyDetail from './components/PropertyDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/property/new" element={<PropertyForm />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
