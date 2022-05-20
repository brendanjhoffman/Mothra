import clsx from 'clsx';
import { useId } from 'react';

const TextField = ({ label, error, helperText, ...props }) => {
  const id = useId();

  return (
    <fieldset className="flex flex-col text-md text-gray-700 p-1">
      <label className="block text-xs text-gray-500" htmlFor={id}>
        {label}
        {props.required && '*'}
      </label>
      <input
        id={id}
        className={clsx({
          'p-2 border-b rounded-t-md outline-none border-gray-400 transition-colors duration-250': true,
          'border-red-500': error,
          'valid:bg-gray-100 focus:border-blue-500': !error,
        })}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{helperText}</p>}
    </fieldset>
  );
};

export default TextField;
