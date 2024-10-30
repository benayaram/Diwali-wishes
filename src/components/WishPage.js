import React, { useEffect, useState } from 'react';
import './WishPage.css';
import $ from 'jquery';

function WishPage() {
  const [userName, setUserName] = useState('');
  const [isFireworksRunning, setIsFireworksRunning] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }

    // Load the fireworks plugin
    const loadFireworksPlugin = async () => {
      await import('./fireworks.js');
      initializeFireworks();
    };

    const initializeFireworks = () => {
      $('.fireworks').fireworks({
        sound: true,
        opacity: 0.9,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    loadFireworksPlugin();

    const cursor = document.getElementById('cursor');
    const mouseMoveHandler = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };
    document.addEventListener('mousemove', mouseMoveHandler);

    const handleResize = () => {
      initializeFireworks();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleFireworks = () => {
    if (isFireworksRunning) {
      $('.fireworks').hide(); // Hide the fireworks canvas
      // Stop the sound (if your plugin supports it or uses audio elements)
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach((audio) => {
        audio.pause(); // Pause audio
        audio.currentTime = 0; // Reset audio to the start
      });
    } else {
      $('.fireworks').show(); // Show the fireworks canvas
      $('.fireworks').startFireworks(); // Ensure fireworks start again
    }
    setIsFireworksRunning(!isFireworksRunning); // Toggle state
  };

  return (
    <div className="wishPage">
      <div className="fireworks" style={{ display: isFireworksRunning ? 'block' : 'none' }} /> {/* Fireworks background */}
      <div id="cursor" className="cursor" />
      <h1>Happy Diwali, {userName}!</h1>
      <button
        className='startfireworks'
        id="toggleFireworksBtn"
        onClick={toggleFireworks}
      >
        {isFireworksRunning ? 'Stop Fireworks' : 'Start Fireworks'}
      </button>
    </div>
  );
}

export default WishPage;