import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/seattle/clubs');
  };

  return (
    <div className="home-container">
      <button onClick={handleClick} className="club-button">
        Click to access book clubs near you
      </button>
    </div>
  );
}

export default Home; 