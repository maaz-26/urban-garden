import React, { useEffect, useState } from 'react';
import api from '../api';

const PlantList = ({ setSelectedPlant }) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    api.get('/plants')
      .then(response => setPlants(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Plants</h2>
      <ul>
        {plants.map(plant => (
          <li key={plant.id} onClick={() => setSelectedPlant(plant)}>
            {plant.name}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default PlantList;
