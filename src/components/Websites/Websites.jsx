import React from 'react';
import styled from 'styled-components';

const Websites = () => {
  const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 38rem;
  background-color: lightblue;
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
  width: 90%;
  `

  const StyledWebsiteExample = styled.div`
  padding: 2rem;
  width: 100%;
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  `

  const StyledPSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `

  const StyledP = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  font-weight: lighter;
  width: 49%;
  margin-left: 2%;
  margin-top: 2%;
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
      </StyledTopSection>
      <StyledBottomSection>
        <StyledWebsiteExample>
          Här kommer ett exempel på en hemsida ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en hemsida ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en hemsida ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en hemsida ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en hemsida ligga.
        </StyledWebsiteExample>
      </StyledBottomSection>
    </StyledSection>
  )
}

export default Websites;