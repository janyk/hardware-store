import React from 'react';

interface ButtonProps {
  text: string;
  action: Function
}

export const Button: React.FC<ButtonProps> = ({ text, action }) => {
  return (
    <span className="add-button" onClick={() => action()} >{text}</span>
  );
}

