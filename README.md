BOOKWORM
========

A book club management application by Mehul Jain.

GETTING STARTED
--------------

Prerequisites:
- Node.js
- MongoDB
- Yarn

Installation:
1. Clone the repository
2. Install dependencies:
   yarn install

Database Setup:
1. Make sure MongoDB is installed on your system
2. Start MongoDB:
   mongosh
3. The application will automatically create a database named 'bookworm'
4. MongoDB URI: mongodb://127.0.0.1:27017/bookworm

Running the Application:
1. Start the backend server:
   yarn server
   The server will run on http://localhost:3001

2. In a new terminal, start the React frontend:
   yarn start
   The application will open in your browser at http://localhost:3000

Development:
- Frontend: React application runs on port 3000
- Backend: Express server runs on port 3001
- Database: MongoDB runs on port 27017

Testing the Setup:
1. The server is running correctly if you can access:
   http://localhost:3001/api/test

2. MongoDB is connected if you see "MongoDB Connected Successfully" in the server console

3. The React app is working if you see the login page at:
   http://localhost:3000

Dependencies:
- React
- React Router DOM
- Express
- MongoDB
- Mongoose
- bcryptjs
- cors
- dotenv

Project Structure:
src/
  ├── components/
  │   ├── Home.js
  │   ├── Login.js
  │   ├── Signup.js
  │   ├── Locations.js
  │   └── Clubs.js
  ├── services/
  │   ├── userService.js
  │   └── bookClubService.js
  ├── utils/
  │   └── logger.js
  ├── App.js
  └── index.js

server/
  ├── routes/
  │   ├── userRoutes.js
  │   └── bookClubRoutes.js
  └── models/
      ├── User.js
      └── BookClub.js

Features:
1. User Authentication
   - Login
   - Signup
   - Password encryption

2. Book Clubs
   - View clubs by city
   - Filter by genre
   - Join existing clubs

3. Locations
   - Multiple city support
   - City-specific club listings

API Endpoints:
1. Users
   - POST /api/users/register - Register new user 