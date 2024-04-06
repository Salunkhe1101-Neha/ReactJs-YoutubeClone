// TopButtons.js

import React from 'react';
import './ButtonList.css'; // Import the CSS file for styling

function ButtonList() {
  return (
    <div className="top-buttons">
      <button className="top-button">All</button>
      <button className="top-button">News</button>
      <button className="top-button">Music</button>
      <button className="top-button">Live</button>
    </div>
  );
}

export default ButtonList;
