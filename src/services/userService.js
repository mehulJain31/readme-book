import logger from '../utils/logger';

const API_URL = 'http://localhost:3001/api';

export const registerUser = async (userData) => {
  try {
    logger.info('Starting user registration process for:', userData.email);
    logger.debug('Registration endpoint:', `${API_URL}/users/register`);
    
    const response = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    logger.info('Registration response status:', response.status);
    const data = await response.json();
    logger.debug('Registration response data:', data);
    
    if (!response.ok) {
      logger.error('Registration failed:', data.message);
      throw new Error(data.message || 'Registration failed');
    }
    
    logger.info('User registration successful');
    return data;
  } catch (error) {
    logger.error('Registration error:', error.message);
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      logger.error('Network error - Server might be down or unreachable');
    }
    throw new Error(error.message || 'Failed to connect to the server');
  }
}; 