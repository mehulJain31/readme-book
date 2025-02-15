import React from 'react';
import { useParams } from 'react-router-dom';

function GenreClubs() {
  const { genre, city } = useParams();
  
  // Function to format genre name for display
  const formatGenreName = (genreSlug) => {
    if (!genreSlug) return '';
    
    // Remove the prefix and convert to title case
    const name = genreSlug
      .replace('fiction-', '')
      .replace('nonfiction-', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    return name;
  };

  const renderExistingClubLink = () => {
    if (city === 'seattle' && genre === 'nonfiction-politics') {
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
    <div className="genre-clubs-container">
      <h1>Select a Club for {formatGenreName(genre)}</h1>
      {renderExistingClubLink()}
      <div className="genre-clubs-list">
        {/* Club listings for specific genre will go here */}
      </div>
    </div>
  );
}

export default GenreClubs; 