import React from 'react';
import { useNavigate } from 'react-router-dom';
import brandLogo from '../images/brand-logo.png'; // Adjust extension if it's different (.jpg, .svg, etc.)

function Home() {
  const navigate = useNavigate();

  const handleClubClick = () => {
    navigate('/locations');
  };

  const handleBuyClick = () => {
    window.open('https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="home-container">
      <div className="home-options">
        <img src={brandLogo} alt="BookWorm Logo" className="brand-logo" />
        <h1 className="home-title">Welcome to BookWorm</h1>
        <div className="options-grid">
          <div className="option-card">
            <h2>Join a Book Club</h2>
            <p>Find and join book clubs in your area</p>
            <button onClick={handleClubClick} className="club-button">
              Find Book Clubs Near You
            </button>
          </div>
          <div className="option-card">
            <h2>Buy Books</h2>
            <p>Purchase books from Amazon's extensive collection</p>
            <button onClick={handleBuyClick} className="club-button">
              Shop Books on Amazon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 