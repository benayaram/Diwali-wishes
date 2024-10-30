import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import WishPage from './components/WishPage';
import LandingPage from './components/LandingPage'; // Include your LandingPage if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />       {/* Root path */}
        <Route path="/home" element={<HomePage />} />      {/* Home path */}
        <Route path="/wish" element={<WishPage />} />      {/* Wish path */}
      </Routes>
    </Router>
  );
}

export default App;
