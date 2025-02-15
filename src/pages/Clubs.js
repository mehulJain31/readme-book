import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Clubs() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const { city } = useParams();

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
  };

  const formatCityName = (citySlug) => {
    return citySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const renderExistingClubLink = () => {
    if (city === 'seattle' && selectedGenre === 'nonfiction-politics') {
      return (
        <div className="existing-club-section">
          <h2>We found an existing book club near you!</h2>
          <a 
            href="https://www.elliottbaybook.com/events/book-groups" 
            target="_blank" 
            rel="noopener noreferrer"
            className="existing-club-link"
          >
            Join Elliott Bay Book Company's Current Issues & Politics Book Group →
          </a>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="clubs-container">
      <h1>Book Clubs in {formatCityName(city)}</h1>
      <div className="filter-section">
        <select 
          value={selectedGenre} 
          onChange={handleGenreChange}
          className="genre-dropdown"
        >
          <option value="all">All Genres</option>
          <optgroup label="Fiction">
            <option value="fiction-contemporary">Contemporary</option>
            <option value="fiction-dystopian">Dystopian</option>
            <option value="fiction-fantasy">Fantasy</option>
            <option value="fiction-mystery">Mystery</option>
            <option value="fiction-romance">Romance</option>
            <option value="fiction-scifi">Sci-Fi</option>
            <option value="fiction-thriller">Thriller</option>
            <option value="fiction-western">Westerns</option>
          </optgroup>
          <optgroup label="Non-Fiction">
            <option value="nonfiction-history">History</option>
            <option value="nonfiction-philosophy">Philosophy</option>
            <option value="nonfiction-religion">Religion and Spirituality</option>
            <option value="nonfiction-science">Science</option>
            <option value="nonfiction-popscience">Popular Science</option>
            <option value="nonfiction-politics">Politics and Social Sciences</option>
          </optgroup>
        </select>
      </div>
      {renderExistingClubLink()}
      <div className="clubs-list">
        {/* We'll add club listings here later */}
      </div>
    </div>
  );
}

export default Clubs; 