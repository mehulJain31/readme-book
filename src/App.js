import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Locations from './pages/Locations';
import Clubs from './pages/Clubs';
import userIcon from './images/user-icon.png';  // Adjust the file extension if different
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-content">
            <div className="logo">BookWorm</div>
            <div className="user-info">
              <span className="user-name">Mehul Jain</span>
              <img src={userIcon} alt="User Icon" className="user-icon" />
            </div>
          </div>
        </header>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/:city/clubs" element={<Clubs />} />
        </Routes>

        <footer className="footer">
          <div>© 2025 BookWorm. All rights reserved.</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
