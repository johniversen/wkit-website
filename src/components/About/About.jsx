import React from 'react';
import HeaderContainer from '../Header';
import styled from 'styled-components';
import ContactContainer from '../Contact';
import FooterContainer from '../Footer';
import { COLORS } from '../../variables/colors';
import BannerImg from '../../assets/banner.png';

const About = () => {
  const c = { ...COLORS };

  const StyledBanner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: ${c.wkitBlue};
  min-height: 15rem;
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
  font-weight: lighter;
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
  font-weight: lighter;
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
        SVERIGES FRÄMSTA STUDENTER TILL BRANSCHENS BÄSTA PRISER
      </StyledH1>
    </StyledBanner>
    <StyledPSection>
      <StyledP>
      We Know IT är ett studentdrivet konsultbolag. Sedan starten 2008 har vi levererat hundratals lyckade projekt och upplevt en kontinuerlig tillväxt. Hundratals studenter har startat sin karriär som konsulter hos oss. Arbetet på We Know IT är meriterande och lärorikt, och många kollegor blir handplockade till välkända och prestigefyllda företag efter examen. Trots det har vi ett av branschens lägsta priser. Det gör att vi kan leverera de mest prisvärda lösningarna till dig.
      </StyledP>
      <StyledP>
      En del av vår utbildning som studenter är att alltid vara uppdaterad på kommande trender och de senaste verktygen inom IT. Vi är en platt och flexibel organisation vilket gör att vi snabbt kan anpassa oss till en föränderlig omvärld. Det gör att vi alltid kan leverera moderna och kvalitativa lösningar till våra kunder.
      </StyledP>
    </StyledPSection>
    <InfoContainer>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-sitemap"></i> PLATT ORGANISATION</StyledH2>
        <InfoP>Med en platt organisation är vi flexibla och kan snabbt svara på trender inom IT-världen. På det sättet ser vi till att du får en modern och kvalitativ lösning levererad. Varje uppdrag ger oss och våra konsulter viktig erfarenhet och därför kan du lugnt lita på att vi alltid presterar på topp.</InfoP>
      </StyledInfoSection>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-graduation-cap"></i> STUDENTER</StyledH2>
        <InfoP>Vi har samlat skärpta och drivna studenter från Sveriges främsta högskolor. Som studenter är konsulterna alltid kunniga kring det senaste inom IT-världen. Efter examen blir många av våra konsulter handplockade till framgångsrika företag och prestigefyllda konsultfirmor. Trots det har vi ett av marknadens lägsta priser. Därför vågar vi påstå att vi förmodligen är det mest prisvärda alternativet där ute.</InfoP>
      </StyledInfoSection>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-atom"></i> SENASTE TEKNIKEN</StyledH2>
        <InfoP>Eftersom våra konsulter är studenter kan ni vara säkra på att de har koll på den senaste tekniken. IT är en del av vår livsstil och vi levererar alltid lösningar till marknadens bästa timpris.</InfoP>
      </StyledInfoSection>
      <StyledInfoSection>
        <StyledH2><i class="fas fa-history"></i> HISTORIA</StyledH2>
        <InfoP>We Know ITs historia börjar redan 2006 då Johan Geterud och Aron Gilljam vann pris för bästa affärsidé i Venture Cup. 2008 bildades handelsbolaget We Know IT som snart blev aktiebolag. I begynnelsen var företaget endast aktivt i Göteborg men har sedan dess vuxit och finns i dag även i Linköping, Stockholm och Malmö/Lund. Tio år efter starten åtnjuter vi fortfarande en stark tillväxt. Att vi fortsätter ta marknadsandelar är för oss ett betyg på att vi levererar prisvärda resultat till nöjda kunder.</InfoP>
      </StyledInfoSection>
    </InfoContainer>
    <ContactContainer />
    <FooterContainer />
    </>
  )
}

export default About;