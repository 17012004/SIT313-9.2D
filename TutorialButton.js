import React, { useState } from 'react';
import TutorialPic from './TutorialPic';
import './TutorialButton.css';

const TutorialButton = () => {
  const [showTutorials, setShowTutorials] = useState(false);

  const handleToggleTutorials = () => {
    setShowTutorials(!showTutorials);
  };

  return (
    <div className="tutorial-button-container">
      <button className="expand-button" onClick={handleToggleTutorials}>
        FEATURED TUTORIALS
      </button>
      {showTutorials && <TutorialPic />}
    </div>
  );
};

export default TutorialButton;
