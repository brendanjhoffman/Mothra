import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-400 active:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
