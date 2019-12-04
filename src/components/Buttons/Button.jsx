import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = (props) => {
  const { handleClick, buttonText } = props;

  return (
      <Button onClick={handleClick} >
        {buttonText}
      </Button>
  )
}

export default Buttons;