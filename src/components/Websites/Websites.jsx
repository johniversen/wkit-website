import React from 'react';
import styled from 'styled-components';
import Azia from '../../assets/azia.png';
import Briggen from '../../assets/briggen.png';
import Jjflytt from '../../assets/jjflytt.png';
import Primetracker from '../../assets/primetracker.png';
import Ride from '../../assets/ride.png';
import Thailandbo from '../../assets/thailandbo.png';
import Uniter from '../../assets/uniter.png';
import Wcrs from '../../assets/wcrs.png';
import Placeringsbanken from '../../assets/placeringsbanken.png';

// Denna komponent innehåller information vad vi kan göra vad gäller hemsidor, samt länkar till någar tidigare projekt vi utvecklat. 

const Websites = () => {
  const StyledSection = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  width: 100%;
  z-index: 100;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  `
  
  const StyledTopSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  `

  const StyledBottomSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  `

  const StyledWebsiteExample = styled.div`
  padding: 0.5rem;
  width: 16%;

  @media (max-width: 425px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 45%;
  }
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.13);
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  `

  const StyledPSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  `

  const StyledP = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  
  width: 45%;
  margin-left: 2%;
  margin-top: 2%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
  `

  const Thumbnail = styled.img`
  cursor: pointer;
  object-fit: cover;
  max-width: 100%;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  `
  
  return (
    <StyledSection>
      <StyledTopSection>
        <StyledH1>HEMSIDA</StyledH1>
        <StyledH2>VI BYGGER OCH UNDERHÅLLER DIN HEMSIDA TILL MARKNADENS BÄSTA PRIS</StyledH2>
        <StyledPSection>
          <StyledP>Sedan starten 2008 har vi levererat hundratals hemsidor till nöjda kunder över hela landet. Vi bygger alla sorters hemsidor, från webbshoppar till hemsidor med medlemsregister, bokningssystem och andra funktioner. Många av hemsidorna vi bygger är baserade på det välkända verktyget WordPress. WordPress är ett av de populäraste systemen för hemsidor i dag och passar till allt från bloggar till webbshoppar. Med WordPress får du möjligheten att själv enkelt redigera innehållet på hemsidan även efter att vi har byggt den. Vi kan också hjälpa dig sökoptimera din hemsida för att komma högt upp bland sökresultaten på Google och nå ut till ännu fler. Din framgång är vår framgång.
          </StyledP>
          <StyledP>Många av våra kunder är små företag, och vi är vana att tillgodose varje enskilt behov. På ett kostnadsfritt möte skapar vi oss en förståelse kring era utmaningar och visioner. Efter det bygger vi en unik hemsida som är anpassad efter just dina behov. Självklart gör vi detta till ett av marknadens absolut bästa pris!
          </StyledP>
        </StyledPSection>
        <StyledH2>TIDIGARE PROJEKT</StyledH2>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledWebsiteExample>
          <Thumbnail src={Azia} onClick={ () => window.location.href = "http://aziawoksushi.se/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Briggen} onClick={ () => window.location.href = "http://www.restaurang-briggen.se/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Jjflytt} onClick={ () => window.location.href = "https://www.jjflytt.se/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Primetracker} onClick={ () => window.location.href = "https://primetracker.org/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Ride} onClick={ () => window.location.href = "https://rideexecutivesearch.se/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Thailandbo} onClick={ () => window.location.href = "https://thailandbo.se/sv/hem/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Uniter} onClick={ () => window.location.href = "https://uniter.se/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Wcrs} onClick={ () => window.location.href = "https://wcrs.se/"}/>
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          <Thumbnail src={Placeringsbanken} onClick={ () => window.location.href = "https://placeringsbanken.se/"}/>
        </StyledWebsiteExample>
      </StyledBottomSection>
    </StyledSection>
  )
}

export default Websites;