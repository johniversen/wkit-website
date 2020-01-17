import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../variables/colors';
import FormContainer from '../Form';

export default function ContactClient() {
  const c = { ...COLORS };
  const [toggledDiv, setCurrentDiv] = useState('default');

  const setDiv = () => {
    // const newValue = e.target.value;
    // setCurrentDiv(newValue);
    console.log("Changed");
  }

  const ToggledDiv = styled.div`
  width: 50%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  text-align: left;

  & > ul {
    margin-left: 1rem;
  }
  `

  const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.13);
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  width: 70%;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.13);
  `

  const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  `

  const StyledInfoSection = styled.a`
  padding: 2%;
  width: 40%;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  color: ${c.wkitBlue};

  @media (max-width: 768px) {
    width: 100%;
  }
  `

  return (
    <>
    <StyledSection id="contact">
      <StyledH1>KONTAKTA OSS</StyledH1>
      <StyledH2>KONTAKTA OSS GÄRNA OM NI HAR NÅGRA FUNDERINGAR, TANKAR ELLER IDÉER SOM NI BEHÖVER HJÄLP ATT REALISERA</StyledH2>
      <InfoContainer>
        <StyledInfoSection href="tel:010-1510899"><i class="fas fa-phone"></i> 010 - 151 08 99</StyledInfoSection>
        <StyledInfoSection href="mailto:support@weknowit.se"><i class="fas fa-envelope"></i> support@weknowit.se</StyledInfoSection>
      </InfoContainer>
      <FormContainer onChange={setDiv} />
      {toggledDiv === 'Hemsida' && <ToggledDiv>
        <p>Försök besvara följande i ditt meddelande:</p>
        <ul>
          <li>Vad ska hemsidan användas till?</li>
          <li>Vad ska hemsidan innehålla?</li>
          <li>Har du idag någon inspiration för din hemsida?</li>
        </ul>
      </ToggledDiv>}
      {toggledDiv === 'Mobilapplikation' && <ToggledDiv>
        <p>Försök besvara följande i ditt meddelande:</p>
        <ul>
          <li>Vad ska applikationen användas till?</li>
          <li>Vad ska applikationen innehålla?</li>
          <li>Har du idag någon inspiration för din applikation?</li>
        </ul>
      </ToggledDiv>}
    </StyledSection>
    </>
  );
}