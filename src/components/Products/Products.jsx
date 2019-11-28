import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../variables/colors';


const Products = () => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  background-color: ${c.navBlue};
  height: 25rem;
  `

  const StyledProcutContainer = styled.div`
  `

  return (
    <StyledSection>
      <StyledProcutContainer>
        <h1>HEMSIDOR</h1>
        <p>Vi hjälper er att bygga en hemsida eller uppdatera en befintlig. Vi är specialister på hemsidor för små företag men jobbar så klart också med både privatpersoner och större företag! Många hemsidor vi bygger baseras på det populära systemet WordPress, men givetvis anpassar vi hemsideutvecklingen efter era önskemål.</p>
      </StyledProcutContainer>
      <StyledProcutContainer>
      <h1>APPAR</h1>
        <p>Vi gör appar för Android, iPhone/iOS och Windows Mobile. Vi utgår från era behov och önskemål och gör en app som är skräddarsydd för er!</p>
      </StyledProcutContainer>
      <StyledProcutContainer>
      <h1>UTVECKLING</h1>
        <p>Våra konsulter är skickliga programmerare inom flera olika programmeringsspråk. Efter att vi skapat oss en förståelse kring era utmaningar och visioner utvecklar vi en unik lösning anpassar efter just era behov. Vi är specialister på utveckling för små företag, men jobbar givetvis också med större företag!</p>
      </StyledProcutContainer>
      <StyledProcutContainer>
      <h1>BEMANNING</h1>
        <p>På We Know IT har vi lång erfarenhet av att hjälpa företag runt om i Sverige att förverkliga sina produktvisioner. Våra konsulter har en bred teknisk kompetens som kommit väl till användning när vi exempelvis tagit fram bokningssystem för restauranger och tidrapporteringssystem för företag. Vår bredd gör att vi effektivt kan ta oss an alla möjliga sorters utvecklingsprojekt. Det är bara idéerna som sätter gränserna.</p>
      </StyledProcutContainer>
    </StyledSection>
  )
}

export default Products;