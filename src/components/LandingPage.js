import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/Diwali-wishes/home'); // Navigate to the HomePage
  };

  return (
    <div className="landingPage">
      <div className="diwaliText">Happy Diwali</div>
      <button className="enterButton" onClick={handleEnter}>
        Enter the World
      </button>
    </div>
  );
}

export default LandingPage;
