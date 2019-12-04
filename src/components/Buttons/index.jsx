import React from 'react';
import Buttons from './Button';

const ButtonContainer = (props) => {
  const { buttonFunction, buttonText } = props;
  return (
    <Buttons handleClick={ buttonFunction } buttonText={ buttonText } />
  )
}

export default ButtonContainer;