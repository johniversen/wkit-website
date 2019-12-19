import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonContainer from '../Buttons';
import WebsitesContainer from '../Websites';
import AppsContainer from '../Apps';
import DevelopmentContainer from '../Development';
import StaffContainer from '../Staff';
import Back from '../../assets/back.png';

const Products = () => {
  const [toggledCard, setCurrentCard] = useState('default');

  const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  height: 37rem;
  padding: 2rem;
  `

  const StyledProcutContainer = styled.div`
  padding: 2rem;
  width: 40%;
  `

  const StyledH1 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
  `

  const StyledP = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  font-weight: lighter;
  `

  const StyledBackButton = styled.img.attrs({
    src: Back
  })`
  height: 4rem;
  cursor: pointer;
  margin-left: 1%;
  margin-top: 1%;
  position: absolute;
  z-index: 101;
  `
  
  return (
    <>
    {toggledCard !== 'default' && <StyledBackButton onClick={ () => setCurrentCard('default')} />}
    <StyledSection>
    {toggledCard === 'website' && <WebsitesContainer />}
    {toggledCard === 'development' && <DevelopmentContainer />}
    {toggledCard === 'apps' && <AppsContainer />}
    {toggledCard === 'staff' && <StaffContainer />}
        <StyledProcutContainer>
          <StyledH1>HEMSIDOR</StyledH1>
          <StyledP>Vi hjälper er att bygga en hemsida eller uppdatera en befintlig. Vi är specialister på hemsidor för små företag men jobbar så klart också med både privatpersoner och större företag! Många hemsidor vi bygger baseras på det populära systemet WordPress, men givetvis anpassar vi hemsideutvecklingen efter era önskemål.</StyledP>
          <ButtonContainer buttonText={"Läs mer"} buttonFunction={ () => setCurrentCard('website')} />
        </StyledProcutContainer>
        <StyledProcutContainer>
          <StyledH1>UTVECKLING</StyledH1>
          <StyledP>Våra konsulter är skickliga programmerare inom flera olika programmeringsspråk. Efter att vi skapat oss en förståelse kring era utmaningar och visioner utvecklar vi en unik lösning anpassar efter just era behov. Vi är specialister på utveckling för små företag, men jobbar givetvis också med större företag!</StyledP>
          <ButtonContainer buttonText={"Läs mer"} buttonFunction={ () => setCurrentCard('development')}/>
        </StyledProcutContainer>
        <StyledProcutContainer>
          <StyledH1>APPAR</StyledH1>
          <StyledP>Vi gör appar för Android, iPhone/iOS och Windows Mobile. Vi utgår från era behov och önskemål och gör en app som är skräddarsydd för er!</StyledP>
          <ButtonContainer buttonText={"Läs mer"} buttonFunction={ () => setCurrentCard('apps')} />
        </StyledProcutContainer>
        <StyledProcutContainer>
          <StyledH1>BEMANNING</StyledH1>
          <StyledP>På We Know IT har vi lång erfarenhet av att hjälpa företag runt om i Sverige att förverkliga sina produktvisioner. Våra konsulter har en bred teknisk kompetens som kommit väl till användning när vi exempelvis tagit fram bokningssystem för restauranger och tidrapporteringssystem för företag. Vår bredd gör att vi effektivt kan ta oss an alla möjliga sorters utvecklingsprojekt. Det är bara idéerna som sätter gränserna.</StyledP>
          <ButtonContainer buttonText={"Läs mer"} buttonFunction={ () => setCurrentCard('staff')} />
        </StyledProcutContainer>
    </StyledSection>
    </>
  )
}

export default Products;