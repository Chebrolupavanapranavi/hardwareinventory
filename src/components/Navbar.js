import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/add-item">Add Item</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
