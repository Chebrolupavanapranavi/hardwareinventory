import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAsset = ({ assets, setAssets }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const assetToEdit = assets.find(asset => asset.id === parseInt(id));
  const [assetName, setAssetName] = useState(assetToEdit ? assetToEdit.name : '');
  const [assetType, setAssetType] = useState(assetToEdit ? assetToEdit.type : '');
  const [barcode, setBarcode] = useState(assetToEdit ? assetToEdit.barcode : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAssets = assets.map((asset) =>
      asset.id === parseInt(id)
        ? { ...asset, name: assetName, type: assetType, barcode }
        : asset
    );
    setAssets(updatedAssets);
    navigate('/inventory');
  };

  return (
    <div>
      <h2>Edit Asset {id}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          placeholder="Asset Name"
          required
        />
        <input
          type="text"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
          placeholder="Asset Type"
          required
        />
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Barcode"
          required
        />
        <button type="submit">Update Asset</button>
      </form>
    </div>
  );
};

export default EditAsset;
