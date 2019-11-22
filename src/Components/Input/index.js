import React from 'react';
import './index.scss';

const Input = (props) => {
  return (
    <div
      className="input-container"
    >
      <input {...props} />
    </div>
  );
}

export default Input;