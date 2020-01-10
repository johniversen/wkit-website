import React from 'react';
import HeaderContainer from '../Header';
import styled from 'styled-components';
import ContactCareerContainer from '../ContactCareer';
import FooterContainer from '../Footer';
import { COLORS } from '../../variables/colors';
import BannerImg from '../../assets/banner.png';

// Detta är karriärsidan. Här ligger kontaktformuläret för de som vill jobba hos oss.

const Career = () => {
  const c = { ...COLORS };

  const StyledBanner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: ${c.wkitBlue};
  min-height: 20rem;
  background-image: url(${BannerImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  width: 100%;
  `
  
  const StyledH1 = styled.h1`
  width: 65%;
  margin-top: 5.1rem;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.39);
  `
  const StyledPSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2%;
  `

  const StyledP = styled.p`
  max-height: 80%;
  max-width: 40%;
  font-size: 1.2rem;
  
  `

  const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  padding: 1rem;
  background-color: #50576A;
  color: white;
  `

  const StyledInfoSection = styled.div`
  padding: 2%;
  width: 40%;
  `

  const InfoP = styled.p`
  font-size: 1.1rem;
  
  padding: 2%;
  `
  
  const StyledH2 = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  `
  
  return (
    <>
    <HeaderContainer />
    <StyledBanner>
      <StyledH1>
        VILL DU BLI EN AV OSS?
      </StyledH1>
    </StyledBanner>
    <StyledPSection>
      <StyledP>
      Nu söker vi taggade medarbetare till Sveriges främsta studentkonsultbolag! Vi behöver 1-2 webbutvecklare och har just nu spännande uppdrag inom WordPress, PHP, JavaScript, Node.js, Angular, React, CSS och HTML5. Saknar du arbetslivserfarenhet? Skaffa det hos oss!
      </StyledP>
      <StyledP>
      Vill du sticka ut när du tar examen? Bli IT-konsult under din studietid. Vi har just nu uppdrag till dig som kan Android (Java), iOS (Swift, Objective-C) eller något framework som ex Ionic eller React Native. Saknar du arbetslivserfarenhet? Skaffa det hos oss!
      </StyledP>
    </StyledPSection>
    <InfoContainer>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-user-graduate"></i> STUDENTEN I FOKUS</StyledH2>
        <InfoP>Hos oss är studenten i fokus, det märks tydligt då alla i företaget är studenter! Med en platt organisation har alla möjlighet att påverka företagets framtid och visioner.</InfoP>
      </StyledInfoSection>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-money-bill-wave"></i> KONKURRENSKRAFTIG LÖN</StyledH2>
        <InfoP>Vi vet att du som blivande ingenjör förtjänar en konkurrenskraftig lön som är i linje med din befintliga kunskapsnivå. Därför erbjuder vi en enkel lönetrappa där du redan i första steget har en rejält konkurrenskraftig lön!</InfoP>
      </StyledInfoSection>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-briefcase"></i> ARBETSERFARENHET</StyledH2>
        <InfoP>Vi vet att du som student besitter mycket viktig och relevant kunskap. Hos oss får du hjälp att använda din kunskap på bästa sätt – oavsett om du bygger en hemsida eller gör en app – samtidigt som vi ser till att du hela tiden utvecklas. Viktig arbetslivserfarenhet för framtiden får du av bara farten!</InfoP>
      </StyledInfoSection>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-laugh"></i> ROLIGT</StyledH2>
        <InfoP>Vi vet att du som student besitter mycket viktig och relevant kunskap. Hos oss får du hjälp att använda din kunskap på bästa sätt – oavsett om du bygger en hemsida eller gör en app – samtidigt som vi ser till att du hela tiden utvecklas. Viktig arbetslivserfarenhet för framtiden får du av bara farten!</InfoP>
      </StyledInfoSection>
    </InfoContainer>
    <ContactCareerContainer />
    <FooterContainer />
    </>
  )
}

export default Career;