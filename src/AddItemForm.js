import React, { useState } from 'react';
import axios from 'axios';

function AddItemForm() {
  const [item, setItem] = useState({
    name: '',
    type: '',
    status: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/items/', item)
      .then(response => {
        console.log('Item added:', response.data);
        // Optionally, clear the form or refresh the inventory list
        setItem({
          name: '',
          type: '',
          status: '',
          location: ''
        });
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={item.name} onChange={handleChange} placeholder="Name" required />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" name="type" value={item.type} onChange={handleChange} placeholder="Type" required />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" name="status" value={item.status} onChange={handleChange} placeholder="Status" required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={item.location} onChange={handleChange} placeholder="Location" required />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
