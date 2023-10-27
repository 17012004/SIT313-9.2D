import React, { useState } from 'react';

import ArticlePic from './ArticlePic';
import NewNavbar from './NewNavbar';
import './PageImage.css';
import TutorialButton from './TutorialButton';

const PageImage = ({ onExpandClick }) => {

  return (
    <div className="pageimagebar">
      <img
        src='https://inhabitgroup.com/wp-content/uploads/2016/09/deakin-university-bhf-building-melbourne-australia-002.jpg'
        alt="Cover"
        className="pageimage"
      />
      <button className="expandButton" onClick={onExpandClick}>
        FEATURED ARTICLES
      </button>
    </div>
  );
};

const HomePage = () => {
  const [expandArticles, setExpandArticles] = useState(false);

  const handleExpandClick = () => {
    setExpandArticles(!expandArticles); // Toggle the state between true and false
  };

  return (
    <div>
      <PageImage onExpandClick={handleExpandClick} />
      {expandArticles && <ArticlePic />}
      <TutorialButton/>
        <NewNavbar />

        
    </div>
  );
};

export default HomePage;
