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

const Trust = () => {
  const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  width: 100%;
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

  const NetlightImg = styled.img.attrs({
    src: Netlight
  })`
  height: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  const DatatjejImg = styled.img.attrs({
    src: Datatjej
  })`
  height: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  const LeadImg = styled.img.attrs({
    src: Lead
  })`
  height: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  const RandstadImg = styled.img.attrs({
    src: Randstad
  })`
  height: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `
  
  const WtmgImg = styled.img.attrs({
    src: Wtmg
  })`
  height: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  const KthImg = styled.img.attrs({
    src: Kth
  })`
  height: 3.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  const ChalmersImg = styled.img.attrs({
    src: Chalmers
  })`
  height: 3.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  const LundImg = styled.img.attrs({
    src: Lund
  })`
  height: 3.5rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
  padding: 1%;
  `

  const LinkopingImg = styled.img.attrs({
    src: Linkoping
  })`
  height: 3.5rem;
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
        <NetlightImg onClick={ () => window.location.href = "https://www.netlight.com/"}/>
        <DatatjejImg onClick={ () => window.location.href = "https://datatjej.se/"}/>
        <WtmgImg onClick={ () => window.location.href = "https://wtmg.se/"}/>
        <LeadImg onClick={ () => window.location.href = "https://lead.se/"}/>
        <RandstadImg onClick={ () => window.location.href = "https://www.randstad.se/"}/>
      </PartnersSection>
      <UniSecton>
        <StyledH1>Vi har studenter från Sveriges bästa universitet</StyledH1>
        <KthImg onClick={ () => window.location.href = "https://www.kth.se/"}/>
        <ChalmersImg onClick={ () => window.location.href = "https://www.chalmers.se/sv/Sidor/default.aspx"}/>
        <LundImg onClick={ () => window.location.href = "https://www.lu.se/start"}/>
        <LinkopingImg onClick={ () => window.location.href = "https://liu.se/"}/>
      </UniSecton>
    </StyledSection>
  )
}

export default Trust;