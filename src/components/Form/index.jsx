import React from 'react';
import Form from './Form';

const FormContainer = (props) => {
  return (
    <>
    <Form changeFunction ={ () => props.setDiv() }/>
    </>
  )
}

export default FormContainer;