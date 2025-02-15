import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seattle/clubs" element={<Clubs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
