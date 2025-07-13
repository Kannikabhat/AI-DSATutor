import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} className="p-2 border rounded bg-gray-800 text-white" />;
};

export default Input;
