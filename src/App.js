import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import WishPage from './components/WishPage';
import LandingPage from './components/LandingPage'; // Include your LandingPage if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Diwali-wishes" element={<LandingPage />} /> {/* Your LandingPage */}
        <Route path="/Diwali-wishes/home" element={<HomePage />} />
        <Route path="/Diwali-wishes/wish" element={<WishPage />} />
      </Routes>
    </Router>
  );
}

export default App;
