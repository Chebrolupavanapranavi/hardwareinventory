// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create or update this file with styles below.

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="hero-overlay">
          <h1>Welcome to Hardino Inventory Management</h1>
          <p>Manage your assets with ease and efficiency.</p>
          <Link to="/inventory" className="cta-button">Explore Inventory</Link>
        </div>
      </header>
      
      <section className="home-intro">
        <h2>What is Hardino Inventory Management?</h2>
        <p>
          Hardino Inventory Management is a comprehensive solution for managing hardware assets in your organization. 
          With this tool, you can track, add, edit, and maintain an overview of all your hardware equipment.
        </p>
      </section>
      
      <section className="home-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Real-time Inventory</h3>
            <p>Access real-time data on your assets and inventory status across all locations.</p>
          </div>
          <div className="feature-item">
            <h3>Easy Asset Management</h3>
            <p>Add, edit, and modify assets with an intuitive interface and streamlined workflows.</p>
          </div>
          <div className="feature-item">
            <h3>Barcode Tracking</h3>
            <p>Track all assets using barcode scanning for precise and fast tracking.</p>
          </div>
          <div className="feature-item">
            <h3>Comprehensive Reports</h3>
            <p>Generate insightful reports to make data-driven decisions and optimize inventory management.</p>
          </div>
        </div>
      </section>

      <section className="home-actions">
        <h2>Get Started</h2>
        <p>To begin using Hardino Inventory Management, choose one of the following options:</p>
        <ul className="action-buttons">
          <li><Link to="/inventory" className="cta-button">View Inventory</Link></li>
          <li><Link to="/add" className="cta-button">Add a New Asset</Link></li>
        </ul>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 Hardino Inventory Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
