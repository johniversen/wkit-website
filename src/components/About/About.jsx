import React from 'react';
import HeaderContainer from '../Header';
import styled from 'styled-components';
import ContactContainer from '../Contact';
import FooterContainer from '../Footer';

const About = () => {
  const StyledPSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  height: 20rem;
  background-color: lightblue;
  `

  const StyledP = styled.p`
  max-height: 80%;
  max-width: 40%;
  font-size: 1.2rem;
  font-weight: lighter;
  `

  const StyledH1Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  min-height: 20rem;
  background-color: lightgreen;
  `

  const StyledH1 = styled.h1`
  max-width: 65%;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.39);
  `
  
  return (
    <>
    <HeaderContainer />
    <StyledH1Section>
      <StyledH1>VI ÄR ETT STUDENTDRIVET KONSULTBOLAG</StyledH1>
    </StyledH1Section>
    <StyledPSection>
      <StyledP>
      We Know IT är ett studentdrivet konsultbolag. Sedan starten 2008 har vi levererat hundratals lyckade projekt och upplevt en kontinuerlig tillväxt. Hundratals studenter har startat sin karriär som konsulter hos oss. Arbetet på We Know IT är meriterande och lärorikt, och många kollegor blir handplockade till välkända och prestigefyllda företag efter examen. Trots det har vi ett av branschens lägsta priser. Det gör att vi kan leverera de mest prisvärda lösningarna till dig.
      </StyledP>
      <StyledP>
      En del av vår utbildning som studenter är att alltid vara uppdaterad på kommande trender och de senaste verktygen inom IT. Vi är en platt och flexibel organisation vilket gör att vi snabbt kan anpassa oss till en föränderlig omvärld. Det gör att vi alltid kan leverera moderna och kvalitativa lösningar till våra kunder.
      </StyledP>
    </StyledPSection>
    <ContactContainer />
    <FooterContainer />
    </>
  )
}

export default About;