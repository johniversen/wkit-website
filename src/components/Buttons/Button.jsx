import React from 'react';

const Button = (props) => {
  const { handleClick, buttonText } = props;

  return (
    <button onClick={handleClick} >
      {buttonText}
    </button>
  )
}

export default Button;