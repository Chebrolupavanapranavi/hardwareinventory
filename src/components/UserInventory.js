// src/components/UserInventory.js
import React from 'react';

const UserInventory = () => {
  // Example user data. In a real application, you'd fetch the user's inventory from a backend.
  const userAssets = [
    { id: 1, name: 'Laptop', status: 'Active' },
    { id: 2, name: 'Monitor', status: 'In Maintenance' },
    { id: 3, name: 'Printer', status: 'Active' },
  ];

  return (
    <div className="user-inventory">
      <h2>Your Inventory</h2>
      <ul>
        {userAssets.map(asset => (
          <li key={asset.id}>
            {asset.name} - <strong>{asset.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInventory;
