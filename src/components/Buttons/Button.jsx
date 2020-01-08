import React from 'react';
import Button from '@material-ui/core/Button';

// Detta är standardknappen som användes genom hela sidan. Den importeras från react-materials bibliotek.

const Buttons = (props) => {
  const { handleClick, buttonText } = props;

  return (
      <Button variant="outlined" onClick={handleClick} >
        {buttonText}
      </Button>
  )
}

export default Buttons;