import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import './HomePage.css';

function HomePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name) {
      localStorage.setItem('userName', name); // Save name to local storage

      // Add class to trigger transition
      document.body.classList.add('transition-to-white');

      // Wait for the transition to complete before navigating
      setTimeout(() => {
        navigate('/Diwali-wishes/wish'); // Redirect to the wishes page
      }, 500); // Delay should match the transition duration
    }
  };

  return (
    <div className="homePage">
      <div className="glassEffect">
        <h1>Welcome to Diwali Wishes</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="nameInput"
        />
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default HomePage;
