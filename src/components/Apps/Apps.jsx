import React from 'react';
import styled from 'styled-components';

const Apps = () => {
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
        <StyledH1>APPAR</StyledH1>
        <StyledH2>VI ÄR EXPERTER PÅ APPAR! VI HJÄLPER ER MED FUNKTION OCH DESIGN OCH MED ATT VÄLJA MELLAN ANDROID, IPHONE/IOS OCH WINDOWS MOBILE. SJÄLVKLART TILL MARKNADENS BÄSTA PRIS!</StyledH2>
        <StyledPSection>
          <StyledP>App-världen har fullkomligt exploderat de senaste åren och den förändras ständigt. Vi har gjort flertalet appar till olika plattformar (Android, iPhone/iOS och Windows Mobile) för att lösa vitt skilda problem. En app gör att du sticker ut ur mängden och låter dig nå ut till kunderna på ett mer interaktivt och spännande sätt. Med en app finns fler möjligheter än med en vanlig mobilhemsida, och kunderna kan använda avancerade funktioner som GPS, kamera och ljud!
          </StyledP>
          <StyledP>För att kunna göra en app som uppfyller just ditt behov är det viktigt att vi verkligen förstår dina utmaningar och mål. Boka in ett kostnadsfritt första möte med oss så hjälper vi dig att ta fram förslag på appar som kan höja ditt företag till nya nivåer. Självklart gör vi det till marknadens bästa pris!
          </StyledP>
        </StyledPSection>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledWebsiteExample>
          Här kommer ett exempel på en app ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en app ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en app ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en app ligga.
        </StyledWebsiteExample>
        <StyledWebsiteExample>
          Här kommer ett exempel på en app ligga.
        </StyledWebsiteExample>
      </StyledBottomSection>
    </StyledSection>
  )
}

export default Apps;