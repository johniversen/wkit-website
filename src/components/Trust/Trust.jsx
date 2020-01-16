import React from 'react';
import styled from 'styled-components';
import Netlight from '../../assets/netlight.svg';
import Datatjej from '../../assets/datatjej.png';
import Randstad from '../../assets/randstad.png';
import Lead from '../../assets/lead.png';
import Wtmg from '../../assets/wtmg.png';
import Kth from '../../assets/kth.png';
import Chalmers from '../../assets/chalmers.png';
import Lund from '../../assets/lund.svg';
import Linkoping from '../../assets/linköping.png';

// Detta är komponenten innehållande vårt trust. Ger information om våra partners samt några universtit våra konsulter är ifrån.

const Trust = () => {
  const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  background-color: #E7F1F8;
  padding: 1rem;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  `

  const PartnersSection = styled.section`
  width: 45%;
  `

  const UniSecton = styled.section`
  `

  const StyledH1 = styled.h1`
  font-size: 1.6rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: bold;
  padding: 1%;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.13);
  `

  const Logo = styled.img`
  width: 10rem;
  height: 5rem;
  object-fit: contain;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  return (
    <StyledSection>
      <PartnersSection>
        <StyledH1>Våra partners</StyledH1>
        <Logo src={Netlight} onClick={ () => window.location.href = "https://www.netlight.com/"}/>
        <Logo src={Wtmg} onClick={ () => window.location.href = "https://wtmg.se/"}/>
        <Logo src={Datatjej} onClick={ () => window.location.href = "https://datatjej.se/"}/>
        <Logo src={Lead} onClick={ () => window.location.href = "https://lead.se/"}/>
        <Logo src={Randstad} onClick={ () => window.location.href = "https://www.randstad.se/"}/>
      </PartnersSection>
      <UniSecton>
        <StyledH1>Vi har studenter från Sveriges bästa universitet</StyledH1>
        <Logo src={Kth} onClick={ () => window.location.href = "https://www.kth.se/"}/>
        <Logo src={Chalmers} onClick={ () => window.location.href = "https://www.chalmers.se/sv/Sidor/default.aspx"}/>
        <Logo src={Lund} onClick={ () => window.location.href = "https://www.lu.se/start"}/>
        <Logo src={Linkoping} onClick={ () => window.location.href = "https://liu.se/"}/>
      </UniSecton>
    </StyledSection>
  )
}

export default Trust;