import React from 'react';
import styled from 'styled-components';

// Detta är kontaktformuläret för kunder.

const Contact = () => {
  const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 35rem;
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  width: 70%;
  `
  
  return (
    <StyledSection id="contact">
      <StyledH1>KONTAKTA OSS</StyledH1>
      <StyledH2>KONTAKTA OSS GÄRNA OM NI HAR NÅGRA FUNDERINGAR, TANKAR ELLER IDÉER SOM NI BEHÖVER HJÄLP ATT REALISERA</StyledH2>
    </StyledSection>
  )
}

export default Contact;