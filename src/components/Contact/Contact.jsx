import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  const StyledSection = styled.section`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30rem;
  `
  
  return (
    <StyledSection>
      Här kommer vårt kontaktformulär ligga.
    </StyledSection>
  )
}

export default Contact;