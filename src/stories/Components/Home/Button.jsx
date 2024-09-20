import React, { useState } from 'react';
import Login from '../Login/Login';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setActiveComponent(option);
    setIsOpen(false);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Login':
        return <Login />;
      case 'Register':
        return <div style={{ marginTop: '20px' }}>Register Component</div>;
      default:
        return null;
    }
  };

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
          <button 
            onClick={() => handleOptionClick('Login')}
            style={{ 
              backgroundColor: 'black', 
              color: 'white', 
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            Login
          </button>
          <button 
            onClick={() => handleOptionClick('Register')}
            style={{ 
              backgroundColor: 'black', 
              color: 'white', 
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            Register
          </button>
        </div>
      )}

      {renderActiveComponent()}
    </div>
  );
};

export default Button;