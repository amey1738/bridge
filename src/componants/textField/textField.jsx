import React from 'react';
import './textField.css'; // CSS file for styling

const TextField = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="text-field"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default TextField;