import React from 'react';
import './roundedButton.css'; // Import CSS file for button styling

const RoundedButton = ({ onClick , title}) => {
  return (
    <button className="rounded-button" onClick={onClick}>
      <h4>{title}</h4>
    </button>
  );
};

export default RoundedButton;