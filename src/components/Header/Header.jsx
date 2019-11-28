import React from "react";
import styled from 'styled-components';
import { COLORS } from "../../variables/colors";
import ButtonContainer from '../Buttons';
import { withRouter } from "react-router";

const Header = (props) => {
  const c = { ...COLORS };

  const aboutClick = () => {
    props.history.push("/about");
  }

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: ${c.navBlue};
  height: 5rem;
  `

  return (
    <StyledSection>
      <div>
      <ButtonContainer buttonFunction={aboutClick} buttonText={"OM OSS"} />
      <ButtonContainer buttonText={"KONTAKT"} />
      </div>
    </StyledSection>
  );
}

export default withRouter(Header);