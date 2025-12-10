import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200';
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-brown-600 text-white hover:bg-brown-700',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

