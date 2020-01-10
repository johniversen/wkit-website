import React from 'react';
import styled from 'styled-components';
import Wtmg from '../../assets/wtmg.png';
import Roxen from '../../assets/roxen.png';
import Smwg from '../../assets/smwg.png';

// Detta är bemanningskomponenten. Den visar information om vad vi kan göra i form av bemanning och några företag vi blivit anlitade av innan.

const Staff = () => {
  const StyledSection = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  `

  const StyledH3 = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  `

  const StyledStaffExample = styled.div`
  padding: 1rem;
  width: 45%;
  margin: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    width: 100%;
  }
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.13);
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
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

  const ProductHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  `

  const CompanyInfo = styled.p`
  font-style: italic;
  text-align: left;
  margin-top: 1rem;
  `

  const WtmgImg = styled.img.attrs({
    src: Wtmg
  })`
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  `

  const RoxenImg = styled.img.attrs({
    src: Roxen
  })`
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  `

  const SmwgImg = styled.img.attrs({
    src: Smwg
  })`
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  background-color: #215A5C;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
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
        <StyledH2>TIDIGARE PROJEKT</StyledH2>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledStaffExample>
          <ProductHeader>
              <WtmgImg />
              <StyledH3>WTMG</StyledH3>
          </ProductHeader>
          <CompanyInfo>Web Tech Media Group grundades 2010 i Stockholm med en idé att förenkla digitala projekt. De har idag över 40 utvecklare och designers som arbetar med web-, app- och systemutveckling.</CompanyInfo>
          <CompanyInfo>We Know IT bistår WTMG med kompetent IT-bemanning i form av underkonsulter i perioder då WTMG behöver extra bemanning i projekt. Detta gör att WTMG kan vara extra flexibla mot sina kunder och vi på We Know IT får ett utmärkt kunskapsutbyte samtidigt som WTMG får använda sig av Sveriges bästa IT-studenter till marknadens mest konkurrenskraftiga pris.</CompanyInfo>
        </StyledStaffExample>
        <StyledStaffExample>
          <ProductHeader>
              <RoxenImg />
              <StyledH3>ROXEN AB</StyledH3>
          </ProductHeader>
          <CompanyInfo>Roxen AB är ett företag som erbjuder avancerad redaktions- och innehållshanteringsprogramvara till kunder inom områden som media, telekom och högre utbildning.</CompanyInfo>
          <CompanyInfo>We Know IT bistår Roxen med kompetent IT-bemanning i form av underkonsulter i perioder då Roxen behöver extra bemanning i projekt. We Know IT har löpande uppdrag för att arbeta och utveckla i React Native på flertalet applikationer som är fundamentala för Roxens fortsätta utveckling.</CompanyInfo>
        </StyledStaffExample>
        <StyledStaffExample>
          <ProductHeader>
              <SmwgImg />
              <StyledH3>SMWG</StyledH3>
          </ProductHeader>
          <CompanyInfo>Social Media Work Group är ett företag i Göteborg med ambitionen att förenkla arbetsgivares rekryteringsprocesser genom digitala lösningar på sociala medier.</CompanyInfo>
          <CompanyInfo>We Know IT bistår SMWG med utveckling av nya digitala verktyg för användning. Följande kompetenser har används för att utveckla dessa verktyg: PHP, JavaScript och CSS.</CompanyInfo>
        </StyledStaffExample>
      </StyledBottomSection>
    </StyledSection>
  )
}

export default Staff;