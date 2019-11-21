import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../variables/colors';

const Banner = () => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: ${c.backgroundGreen};
  height: 15rem;
  `

  const StyledH1 = styled.h1`
  font-size: 2.3rem;
  font-weight: bold;
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
