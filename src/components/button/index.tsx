import React from 'react';

interface ButtonProps {
  text: string;
  action: Function
}

export const Button: React.FC<ButtonProps> = ({ text, action }) => {
  return (
    <div className="input-group-append">
      <button className="btn btn-primary" onClick={() => action()}>
        {text}
      </button>
    </div>
  );
}

