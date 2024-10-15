// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('user'); // Default is user
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Simulating registration. In a real-world app, you'd send the data to a backend.
    const userData = { email, password, role: selectedRole };

    // Save user to localStorage (mock backend for now)
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...existingUsers, userData]));

    alert('Registration successful! Please log in.');
    navigate('/login'); // Redirect to login after signup
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />

        {/* Role Selection */}
        <div className="role-selection">
          <label>
            <input 
              type="radio" 
              name="role" 
              value="user" 
              checked={selectedRole === 'user'} 
              onChange={() => setSelectedRole('user')}
            />
            User
          </label>
          <label>
            <input 
              type="radio" 
              name="role" 
              value="admin" 
              checked={selectedRole === 'admin'} 
              onChange={() => setSelectedRole('admin')}
            />
            Admin
          </label>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
