import React, { useState } from 'react';
import './NewNavbar.css';

const NewNavbar = () => {
  const [email, changeEmail] = useState('');
  const [error, setError] = useState(''); // State for error message

  const a = async () => {
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('http://localhost:3070/a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'email=' + encodeURIComponent(email),
      });

      if (response.status === 200) {
        setError(''); // Clear the error message
        alert('Email sent successfully');
      } else {
        setError('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred');
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="new-navbar">
      <div className="new-left-content">
        <span className="new-username">SIGN UP FOR UPDATES</span>
      </div>
      <div className="new-center-content">
        <input
          type="text"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            changeEmail(e.target.value);
            setError(''); // Clear the error when input changes
          }}
          className="new-search-bar"
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="new-right-content">
        <span className="new-nav-item" onClick={a}>
          JOIN NOW
        </span>
      </div>
    </div>
  );
};

export default NewNavbar;
