import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './PlanPagestyle.css'; // Import the CSS file for styling

function PlansPage() {
  const navigate = useNavigate();

  const handleContinueFree = () => {
    // Navigate back to the welcome page when "Continue Free" button is clicked
    navigate('/');
  };
  return (
    <div className="container">
      <h2>Choose your plan</h2>
      <div className="price-row">
        <div className="price-col">
          <p>Premium</p>
          <h3>₹1200 <span>/ month</span></h3>
          <ul>
            <li>Unlimited Posts</li>
            <li>Editable Post reviews</li>
            <li>Professional Suggestions</li>
            <li>Date Editor</li>
            <li>Support with AI</li>
          </ul>
          
          <Link to="https://buy.stripe.com/test_bIYcNX8CB21I5NKfYY">
          <button>Add To Cart</button>
          
          </Link>
            </div>
        <div className="price-col">
          <p>Free Plan</p>
          <h3>₹0 <span>/ month</span></h3>
          <ul>
            <li>Limited Posts</li>
            <li>Fixed Post reviews</li>
            <li>Basic Suggestions</li>
            <li>Limited support</li>
          </ul>
          <Link to = "/Welcome">
          <button >Continue Free</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlansPage;
