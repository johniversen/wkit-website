import React from 'react';
import styled from 'styled-components';
import Netlight from '../../assets/netlight.svg';
import Datatjej from '../../assets/datatjej.png';
import Randstad from '../../assets/randstad.png';
import Lead from '../../assets/lead.png';
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
  `

  const DatatjejImg = styled.img.attrs({
    src: Datatjej
  })`
  height: 2.5rem;
  margin-right: 1rem;
  `

  const LeadImg = styled.img.attrs({
    src: Lead
  })`
  height: 2.5rem;
  margin-right: 1rem;
  `

  const RandstadImg = styled.img.attrs({
    src: Randstad
  })`
  height: 2.5rem;
  margin-right: 1rem;
  `

  const KthImg = styled.img.attrs({
    src: Kth
  })`
  height: 3.5rem;
  margin-right: 1rem;
  `

  const ChalmersImg = styled.img.attrs({
    src: Chalmers
  })`
  height: 3.5rem;
  margin-right: 1rem;
  `

  const LundImg = styled.img.attrs({
    src: Lund
  })`
  height: 3.5rem;
  margin-right: 1rem;
  `

  const LinkopingImg = styled.img.attrs({
    src: Linkoping
  })`
  height: 3.5rem;
  margin-right: 1rem;
  `
  
  return (
    <StyledSection>
      <PartnersSection>
        <StyledH1>Våra partners</StyledH1>
        <NetlightImg />
        <DatatjejImg />
        <LeadImg />
        <RandstadImg />
      </PartnersSection>
      <UniSecton>
        <StyledH1>Vi har studenter från Sveriges bästa universitet</StyledH1>
        <KthImg />
        <ChalmersImg />
        <LundImg />
        <LinkopingImg />
      </UniSecton>
    </StyledSection>
  )
}

export default Trust;