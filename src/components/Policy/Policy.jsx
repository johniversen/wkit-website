import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import Contact from '../Contact';
import FooterContainer from '../Footer';

const Policy = () => {
  const StyledSection = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3%;
  `
  
  const StyledH1 = styled.h1`
  margin-top: 5.01rem;
  font-size: 1.4rem;
  font-weight: bold;
  `

  const StyledP = styled.p`
  font-size: 1.1rem;
  font-weight: lighter;
  margin-top: 1%;
  `
  
  return (
    <>
    <Header />
    <StyledSection>
      <StyledH1>WE KNOW IT:S PERSONUPPGIFTSPOLICY</StyledH1>
      <StyledP>Den nya personuppgiftslagen General Data Protection Regulation (GDPR) handlar om hur företag behandlar personuppgifter. Vi på WKIT vill försäkra dig om att vi behandlar dina personuppgifter på rätt sätt. Lagen gäller inom alla EU:s medlemsländer och trädde i kraft den 25:e maj 2018.</StyledP>
      <StyledP><strong>Vilka uppgifter sparar vi om dig och hur länge behåller vi dem?</strong></StyledP>
      <StyledP>
        <ul>
          <li>När du skickar en förfrågan till oss genom formuläret på vår hemsida sparar vi ditt mail med personuppgifterna du angett i max 36 månader.</li>
          <li>När du skicka in en ansökan om en position hos oss som inte skulle leda till anställning, behåller vi ditt mail med personuppgifter i upp till 36 månader.</li>
        </ul>
      </StyledP>
      <StyledP>Du kan alltid begära att vi ska radera dina personuppgifter när så önskas, så länge det är i enlighet med lag.</StyledP>
      <StyledP>Denna information kan komma att ändras i enlighet med ändringar i lagen.</StyledP>
    </StyledSection>
    <Contact />
    <FooterContainer />
    </>
  )
}

export default Policy;