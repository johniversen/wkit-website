import React from 'react';
import styled from 'styled-components';

const Trust = () => {
  const StyledSection = styled.section`
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 35rem;
  `
  
  return (
    <StyledSection>
      Här kommer vårt trust-stycke ligga.
    </StyledSection>
  )
}

export default Trust;