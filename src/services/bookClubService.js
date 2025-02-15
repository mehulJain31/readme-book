const API_URL = 'http://localhost:3001/api/bookclubs';

export const getBookClubs = async (city, genre) => {
  try {
    const response = await fetch(`${API_URL}/${city}/${genre}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching book clubs:', error);
    throw error;
  }
};

export const createBookClub = async (bookClubData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookClubData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating book club:', error);
    throw error;
  }
}; 