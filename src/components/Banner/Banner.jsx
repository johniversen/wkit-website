import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../variables/colors';
import BannerImg from '../../assets/banner.png';

// Detta är bannerkomponenten som visas högst upp under headern.

const Banner = () => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: ${c.wkitBlue};
  min-height: 39rem;
  background-image: url(${BannerImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  width: 100%;
  `
  
  const StyledH1 = styled.h1`
  width: 65%;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.39);
  margin-top: 5.01rem;
  `

  return (
    <StyledSection>
      <StyledH1>
        SVERIGES FRÄMSTA STUDENTER TILL BRANSCHENS BÄSTA PRISER
      </StyledH1>
    </StyledSection>
  );
};

export default Banner;
