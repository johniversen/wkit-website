import React from 'react';
import styled from 'styled-components';
import Innototal from '../../assets/innototal.png';
import Havovatten from '../../assets/havovatten.png';
import Refundflight from '../../assets/refundflight.png';
import Motala from '../../assets/motala.png';


const Development = () => {
  const StyledSection = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 38rem;
  position: absolute;
  z-index: 100;
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

  const StyledDevelopmentExample = styled.div`
  padding: 1rem;
  width: 45%;
  margin: 0.5rem;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  `

  const StyledH3 = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  `

  const StyledPSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `

  const StyledP = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: lighter;
  width: 49%;
  margin-left: 2%;
  margin-top: 2%;
  `

  const CompanyInfo = styled.p`
  font-style: italic;
  text-align: left;
  `

  const InnototalImg = styled.img.attrs({
    src: Innototal
  })`
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
  `

  const HavovattenImg = styled.img.attrs({
    src: Havovatten
  })`
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  `

  const RefundflightImg = styled.img.attrs({
    src: Refundflight
  })`
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
  `

  const MotalaImg = styled.img.attrs({
    src: Motala
  })`
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  `

  const ProductHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  `
  
  return (
    <StyledSection>
      <StyledTopSection>
        <StyledH1>UTVECKLING</StyledH1>
        <StyledH2>UTVECKLING PÅ TIMBASIS ELLER FÖR ETT HELT PROJEKT</StyledH2>
        <StyledPSection>
          <StyledP>Vi utvecklar kompletta lösningar till era problem – allt från prototyper till färdiga produkter. Tidigare har våra programmerare bland annat utvecklat Sharepoint-projekt, en databas för ett gym, bokningssystem för restauranger, en applikation för fiskedata och automation för CNC-programmering. Projekten har uppstått ur frågor från kunder, så om du har en idé, kontakta oss för att diskutera den!
          </StyledP>
          <StyledP>Många av våra kunder är små företag, och vi är vana att tillgodose varje enskilt behov. På ett kostnadsfritt möte skapar vi oss en förståelse kring era utmaningar och era visioner. Efter det utvecklar vi en unik lösning som är anpassad efter just dina behov. Självklart gör vi detta till marknadens absolut bästa pris!
          </StyledP>
        </StyledPSection>
        <StyledH2>TIDIGARE PROJEKT</StyledH2>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledDevelopmentExample>
          <ProductHeader>
            <InnototalImg />
            <StyledH3>INNOTOTAL AB</StyledH3>
          </ProductHeader>
          <CompanyInfo>Innototal utanför Göteborg jobbar med CNC-fräs och programmerar med G-kod. De kom till oss med förbättringsidéer.</CompanyInfo>
        </StyledDevelopmentExample>
        <StyledDevelopmentExample>
          <ProductHeader>
            <MotalaImg />
            <StyledH3>MOTALA KOMMUN</StyledH3>
          </ProductHeader>
          <CompanyInfo>Motala kommun ville ha en platform för analyser av medarbetarundersökningar. Platformen skulle innehålla flertalet funktioner för bland annat att skapa skapa och skicka enkäter som administratörs samt läsa och fylla i enkäter som personal.</CompanyInfo>
        </StyledDevelopmentExample>
        <StyledDevelopmentExample>
          <ProductHeader>
            <RefundflightImg />
            <StyledH3>REFUNDFLIGHT</StyledH3>
          </ProductHeader>
          <CompanyInfo>RefundFlight hjälper resenär att få ut ersättning av flygbolag vid förseningar. De hade ett behov att förbättra och optimera deras processer.</CompanyInfo>
        </StyledDevelopmentExample>
        <StyledDevelopmentExample>
          <ProductHeader>
            <HavovattenImg />
            <StyledH3>HAVS- OCH VATTENMYNDIGHETEN</StyledH3>
          </ProductHeader>
          <CompanyInfo>Havs- och vattenmyndigheten (fd. Fiskeriverket) behövde ett system för inmatning av fiskedata till sjöss.</CompanyInfo>
        </StyledDevelopmentExample>
      </StyledBottomSection>
    </StyledSection>
  )
}

export default Development;