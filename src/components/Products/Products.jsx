import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../Buttons';


const Products = () => {
  const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 38rem;
  `

  const StyledTopSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  `

  const StyledBottomSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  `

  const StyledProcutContainer = styled.div`
  padding: 2rem;
  width: 100%;
  `

  const StyledH1 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
  `

  const StyledP = styled.p`
  margin-bottom: 2rem;
  `
  
  return (
    <StyledSection>
      <StyledTopSection>
        <StyledProcutContainer>
          <StyledH1>HEMSIDOR</StyledH1>
          <StyledP>Vi hjälper er att bygga en hemsida eller uppdatera en befintlig. Vi är specialister på hemsidor för små företag men jobbar så klart också med både privatpersoner och större företag! Många hemsidor vi bygger baseras på det populära systemet WordPress, men givetvis anpassar vi hemsideutvecklingen efter era önskemål.</StyledP>
          <ButtonContainer buttonText={"Läs mer"} />
        </StyledProcutContainer>
        <StyledProcutContainer>
          <StyledH1>UTVECKLING</StyledH1>
          <StyledP>Våra konsulter är skickliga programmerare inom flera olika programmeringsspråk. Efter att vi skapat oss en förståelse kring era utmaningar och visioner utvecklar vi en unik lösning anpassar efter just era behov. Vi är specialister på utveckling för små företag, men jobbar givetvis också med större företag!</StyledP>
          <ButtonContainer buttonText={"Läs mer"} />
        </StyledProcutContainer>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledProcutContainer>
          <StyledH1>APPAR</StyledH1>
          <StyledP>Vi gör appar för Android, iPhone/iOS och Windows Mobile. Vi utgår från era behov och önskemål och gör en app som är skräddarsydd för er!</StyledP>
          <ButtonContainer buttonText={"Läs mer"} />
        </StyledProcutContainer>
        <StyledProcutContainer>
          <StyledH1>BEMANNING</StyledH1>
          <StyledP>På We Know IT har vi lång erfarenhet av att hjälpa företag runt om i Sverige att förverkliga sina produktvisioner. Våra konsulter har en bred teknisk kompetens som kommit väl till användning när vi exempelvis tagit fram bokningssystem för restauranger och tidrapporteringssystem för företag. Vår bredd gör att vi effektivt kan ta oss an alla möjliga sorters utvecklingsprojekt. Det är bara idéerna som sätter gränserna.</StyledP>
          <ButtonContainer buttonText={"Läs mer"} />
        </StyledProcutContainer>
      </StyledBottomSection>
    </StyledSection>
  )
}

export default Products;