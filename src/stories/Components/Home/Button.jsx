import React, { useState } from 'react';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
      <button 
        onClick={toggleDropdown}
        style={{ 
          backgroundColor: 'black', 
          color: 'white', 
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Menu
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          right: '0',
          marginTop: '5px',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
          <button style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left'
          }}>
            Login
          </button>
          <button style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left'
          }}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;