// src/components/AddAsset.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAsset = () => {
  const [assetName, setAssetName] = useState('');
  const [assetType, setAssetType] = useState('');
  const [barcode, setBarcode] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to add the asset (e.g., API call)
    // After successful submission, navigate back to the inventory page
    navigate('/inventory');
  };

  return (
    <div>
      <h2>Add Asset</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Asset Name"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Asset Type"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Barcode"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          required
        />
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
};

export default AddAsset;
