import React from 'react';
import './articleauthor.css'; 
const articleauthor = ({ line1, line2, line3, author }) => {
  return (
    <div className="article-content-container">
      <div className="contentinfo">{line1}</div>
      <div className="contentinfo">{line2}</div>
      <div className="contentinfo">{line3}</div>
      
      <div className="author-info">
      <img src="https://media.gettyimages.com/id/185006396/photo/five-pointed-star.jpg?s=612x612&w=gi&k=20&c=L81n-LEGcxP1xGEPAEcPxC6Nv5XJ1OqT-Nfv8Hi3PHk=" alt="Star" className="star-img" />
        <span className="starinfo">4</span>
        {author}
      </div>
    </div>
  );
};

export default articleauthor;