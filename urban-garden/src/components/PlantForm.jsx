import React, { useState, useEffect } from 'react';
import api from '../api';

const PlantForm = ({ selectedPlant, setSelectedPlant }) => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    waterFrequency: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedPlant) {
      setForm(selectedPlant);
    }
  }, [selectedPlant]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPlant) {
      api.put(`/plants/${selectedPlant.id}`, form)
        .then(() => setSelectedPlant(null))
        .catch(error => console.error(error));
    } else {
      api.post('/plants', form)
        .then(() => setSelectedPlant(null))
        .catch(error => console.error(error));
    }
  };

  const handleDelete = () => {
    if (selectedPlant) {
      api.delete(`/plants/${selectedPlant.id}`)
        .then(() => setSelectedPlant(null))
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedPlant ? 'Edit Plant' : 'Add Plant'}</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <br />
      <input
        type="text"
        name="type"
        value={form.type}
        onChange={handleChange}
        placeholder="Type"
        required
      />
      <br />
      <input
        type="text"
        name="waterFrequency"
        value={form.waterFrequency}
        onChange={handleChange}
        placeholder="Water Frequency"
        required
      />
      <br />
      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes"
      ></textarea>
      <br />
      <button type="submit">Submit</button>
      {selectedPlant && <button type="button" onClick={handleDelete}>Delete</button>}
    </form>
  );
};

export default PlantForm;
