import React, { useState } from 'react';
import './Button.css';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    console.log(`Clicked: ${option}`);
    setIsOpen(false);
  };

  const menuItems = [
    'Home',
    'Log in',
    'Register',
    'Profile',
    'Calendar',
    'Health Tracker',
    'Pill Reminder'
  ];

  return (
    <div className="button-container">
      <button 
        onClick={toggleDropdown}
        className="menu-button"
        aria-label="Toggle menu"
      >
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {isOpen && (
        <div className="dropdown">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleOptionClick(item)}
              className="dropdown-item"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Button;