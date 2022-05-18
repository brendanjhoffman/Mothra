import clsx from 'clsx';
import React from 'react';

const Button = ({ color, variant, children, ...props }) => {
  return (
    <button
      className={clsx(
        {
          'ring-1': variant === 'outlined',

          'text-blue-500': color === 'primary' && variant === undefined,
          'text-gray-600': color === 'secondary' && variant === undefined,

          'text-blue-500 ring-blue-500 ring-1':
            color === 'primary' && variant === 'outlined',

          'text-white bg-blue-500':
            color === 'primary' && variant === 'contained',

          'text-gray-600 ring-gray-600 ring-1':
            color === 'secondary' && variant === 'outlined',

          'text-white bg-gray-600':
            color === 'secondary' && variant === 'contained',
        },
        'px-3 py-1 rounded-full',
        'active:opacity-30',
        'transition-opacity',
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
