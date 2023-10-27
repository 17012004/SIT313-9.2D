import React from 'react';
import './articlename.css'; 

const articlename = ({ name }) => {
  return (
    <div className="nameinfo">
      {name}
    </div>
  );
};

export default articlename;