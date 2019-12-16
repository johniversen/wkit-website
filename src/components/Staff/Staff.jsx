import React from 'react';
import styled from 'styled-components';

const Staff = () => {
  const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 38rem;
  background-color: lightyellow;
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
        <StyledH1>BEMANNING</StyledH1>
        <StyledH2>VI ERBJUDER UNDERKONSULTER PÅ TIMBASIS TILL ERA PROJEKT</StyledH2>
        <StyledPSection>
          <StyledP>Vi utvecklar kompletta lösningar till era problem – allt från prototyper till färdiga produkter. Tidigare har våra programmerare bland annat utvecklat Sharepoint-projekt, en databas för ett gym, bokningssystem för restauranger, en applikation för fiskedata och automation för CNC-programmering. Projekten har uppstått ur frågor från kunder, så om du har en idé, kontakta oss för att diskutera den!
          </StyledP>
          <StyledP>Många av våra kunder är små företag, och vi är vana att tillgodose varje enskilt behov. På ett kostnadsfritt möte skapar vi oss en förståelse kring era utmaningar och era visioner. Efter det utvecklar vi en unik lösning som är anpassad efter just dina behov. Självklart gör vi detta till marknadens absolut bästa pris!
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

export default Staff;