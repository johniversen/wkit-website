import React from 'react';
import Header from '../Header';
import styled from 'styled-components';

const About = () => {
  const StyledPSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  height: 15rem;
  background-color: lightblue;
  `

  const StyledP = styled.p`
  max-height: 80%;
  max-width: 40%;
  font-size: 1.2rem;
  `

  const StyledH1Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 10rem;
  background-color: lightgreen;
  `

  const StyledH1 = styled.h1`
  max-width: 80%;
  font-size: 2.3rem;
  font-weight: bold;
  `
  
  return (
    <>
    <Header />
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
    </>
  )
}

export default About;