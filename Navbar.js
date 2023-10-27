import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    // Navigate to the plan page when the Subscribe button is clicked
    navigate('/planpage');
  };

  return (
    <div className="custom-navbar">
      <div className="custom-left-content">
        <span className="custom-username">DEV@Deakin</span>
      </div>
      <div className="custom-center-content">
        <input type="text" placeholder="Search..." className="custom-search-bar" />
      </div>
      <div className="custom-right-content">
        <span className="custom-nav-item"><Link to='/post'>Post</Link></span>
        <span className="custom-nav-item"><Link to='/login'>Login</Link></span> {/* Use Link component for navigation */}
        <span className="custom-nav-item" onClick={handleSubscribeClick}>Subscribe</span>
      </div>
    </div>
  );
};

export default Navbar;
