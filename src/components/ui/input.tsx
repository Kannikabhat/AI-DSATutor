import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`p-2 border rounded bg-gray-800 text-white ${props.className || ''}`}
    />
  );
});

Input.displayName = "Input";

export default Input;
