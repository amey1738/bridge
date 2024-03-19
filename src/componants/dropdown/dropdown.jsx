import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import './dropdown.css'; // CSS file for styling

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}> 
        <div className='header-title'>
        <div class="grey-circle"></div>
        {selectedOption || 'Select a network'}
        </div>
        
        <FaAngleDown/>
       </div>

      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;