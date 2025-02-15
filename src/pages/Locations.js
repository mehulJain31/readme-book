import React from 'react';
import { useNavigate } from 'react-router-dom';
import seattleImg from '../images/seattle.jpg';
import sfImg from '../images/san-francisco.jpg';
import dallasImg from '../images/dallas.jpg';
import nyImg from '../images/new-york.jpg';

function Locations() {
  const navigate = useNavigate();
  
  const locations = [
    { id: 'seattle', name: 'Seattle', image: seattleImg },
    { id: 'san-francisco', name: 'San Francisco', image: sfImg },
    { id: 'dallas', name: 'Dallas', image: dallasImg },
    { id: 'new-york', name: 'New York', image: nyImg }
  ];

  const handleLocationSelect = (locationId) => {
    navigate(`/${locationId}/clubs`);
  };

  return (
    <div className="locations-container">
      <h1>Choose your location</h1>
      <div className="locations-grid">
        {locations.map(location => (
          <button
            key={location.id}
            className="location-button"
            onClick={() => handleLocationSelect(location.id)}
          >
            <div className="location-image" style={{ backgroundImage: `url(${location.image})` }}></div>
            <div className="location-name">{location.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Locations; 