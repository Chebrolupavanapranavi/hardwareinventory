// src/components/InventoryList.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const InventoryList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get("/api/inventory/")
      .then((response) => setAssets(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Inventory List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Barcode</th>
            <th>Quantity</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.description}</td>
              <td>{asset.barcode}</td>
              <td>{asset.quantity}</td>
              <td>{asset.location}</td>
              <td>{asset.status}</td>
              <td>
                <Link to={`/edit-asset/${asset.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
