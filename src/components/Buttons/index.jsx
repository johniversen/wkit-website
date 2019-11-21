import React from 'react';
import Button from './Button';

const ButtonContainer = (props) => {
  const { buttonFunction, buttonText } = props;
  return (
    <Button handleClick={ buttonFunction } buttonText={ buttonText } />
  )
}

export default ButtonContainer;