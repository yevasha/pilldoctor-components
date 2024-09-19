import React from 'react';

const Button = ({ label, onClick, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded font-bold';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;