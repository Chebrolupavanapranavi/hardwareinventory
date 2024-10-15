// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory';
import AddAsset from './components/AddAsset';
import Login from './components/Login';
import Signup from './components/Signup'; // Import Signup component
import Dashboard from './components/Dashboard'; // Admin Dashboard
import UserInventory from './components/UserInventory'; // User Inventory/Home Page
import './App.css';

function App() {
  const [role, setRole] = useState(null); // Track login role (user or admin)

  // Protected Route: Redirect non-admin users from dashboard
  const AdminProtectedRoute = ({ element }) => {
    if (role === 'admin') {
      return element;
    } else {
      alert("Access Denied. Only Admins can access the dashboard.");
      return <Navigate to="/" />;
    }
  };

  // Protected Route: Redirect non-logged-in users from user inventory
  const UserProtectedRoute = ({ element }) => {
    if (role === 'user') {
      return element;
    } else {
      alert("Access Denied. Only logged-in users can access this page.");
      return <Navigate to="/" />;
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          <h1>Hardino Inventory Management</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/add">Add Asset</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li> {/* Add Signup Link */}
            </ul>
          </nav>
        </header>

        {/* Routing Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/add" element={<AddAsset />} />
          <Route path="/login" element={<Login setRole={setRole} />} />
          <Route path="/signup" element={<Signup />} /> {/* Signup route */}

          {/* Admin Dashboard Route */}
          <Route path="/dashboard" element={<AdminProtectedRoute element={<Dashboard />} />} />
          
          {/* User Inventory Route */}
          <Route path="/user-inventory" element={<UserProtectedRoute element={<UserInventory />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
