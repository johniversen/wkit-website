import React from 'react';
import styled from 'styled-components';
import CentralYou from '../../assets/centralyou.png';
import Knip from '../../assets/knip.png';
import TwoDices from '../../assets/twodices.png';
import EasyJacket from '../../assets/easyjacket.png';
import Pursuits from '../../assets/pursuits.png';

const Apps = () => {
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
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  `

  const StyledAppExample = styled.div`
  padding: 0.5rem;
  width: 15%;

  @media (max-width: 425px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 30%;
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `

  const StyledP = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  font-weight: lighter;
  width: 45%;
  margin-left: 2%;
  margin-top: 2%;
  text-align: left;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  `

  const CentralYouImg = styled.img.attrs({
    src: CentralYou
  })`
  cursor: pointer;
  object-fit: cover;
  max-width: 100%;
  max-height: 15rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  `

  const PursuitsImg = styled.img.attrs({
    src: Pursuits
  })`
  cursor: pointer;
  object-fit: cover;
  max-width: 100%;
  max-height: 15rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  `

  const KnipImg = styled.img.attrs({
    src: Knip
  })`
  cursor: pointer;
  object-fit: cover;
  max-width: 100%;
  max-height: 15rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  `

  const TwoDicesImg = styled.img.attrs({
    src: TwoDices
  })`
  cursor: pointer;
  object-fit: cover;
  max-width: 100%;
  max-height: 15rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  `

  const EasyJacketImg = styled.img.attrs({
    src: EasyJacket
  })`
  cursor: pointer;
  object-fit: cover;
  max-width: 100%;
  max-height: 15rem;
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
        <StyledH1>APPAR</StyledH1>
        <StyledH2>VI ÄR EXPERTER PÅ APPAR! VI HJÄLPER ER MED FUNKTION OCH DESIGN OCH MED ATT VÄLJA MELLAN ANDROID, IPHONE/IOS OCH WINDOWS MOBILE. SJÄLVKLART TILL MARKNADENS BÄSTA PRIS!</StyledH2>
        <StyledPSection>
          <StyledP>App-världen har fullkomligt exploderat de senaste åren och den förändras ständigt. Vi har gjort flertalet appar till olika plattformar (Android, iPhone/iOS och Windows Mobile) för att lösa vitt skilda problem. En app gör att du sticker ut ur mängden och låter dig nå ut till kunderna på ett mer interaktivt och spännande sätt. Med en app finns fler möjligheter än med en vanlig mobilhemsida, och kunderna kan använda avancerade funktioner som GPS, kamera och ljud!
          </StyledP>
          <StyledP>För att kunna göra en app som uppfyller just ditt behov är det viktigt att vi verkligen förstår dina utmaningar och mål. Boka in ett kostnadsfritt första möte med oss så hjälper vi dig att ta fram förslag på appar som kan höja ditt företag till nya nivåer. Självklart gör vi det till marknadens bästa pris!
          </StyledP>
        </StyledPSection>
        <StyledH2>TIDIGARE PROJEKT</StyledH2>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledAppExample>
          <CentralYouImg onClick={ () => window.location.href = "https://apps.apple.com/us/app/central-you/id1229057149"}/>
        </StyledAppExample>
        <StyledAppExample>
          <EasyJacketImg onClick={ () => window.location.href = "https://play.google.com/store/apps/details?id=com.westmissiontechnologies.easyjacket"}/>
        </StyledAppExample>
        <StyledAppExample>
          <KnipImg onClick={ () => window.location.href = "https://play.google.com/store/apps/details?id=se.knipapp.knip_app"}/>
        </StyledAppExample>
        <StyledAppExample>
          <TwoDicesImg onClick={ () => window.location.href = "https://play.google.com/store/apps/details?id=com.twodices.twodicescustomer"}/>
        </StyledAppExample>
        <StyledAppExample>
          <PursuitsImg onClick={ () => window.location.href = "https://play.google.com/store/apps/details?id=com.pursuits"}/>
        </StyledAppExample>
      </StyledBottomSection>
    </StyledSection>
  )
}

export default Apps;