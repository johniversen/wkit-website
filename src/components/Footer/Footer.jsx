import React from "react";
import styled from 'styled-components';
import ButtonContainer from '../Buttons';
import { withRouter } from "react-router";
import Logo from '../../assets/logo.png';

const Footer = (props) => {
  const aboutClick = () => {
    props.history.push("/about");
  }

  const facebookClick = () => {
    window.location.href = "https://www.facebook.com/WeKnowITswe/";
  }

  const instagramClick = () => {
    window.location.href = "https://www.instagram.com/weknowitswe/";
  }

  const linkedinClick = () => {
    window.location.href = "https://se.linkedin.com/company/we-know-it";
  }
  
  const homeClick = () => {
    props.history.push("/")
  }

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 5rem;
  width: 90%;
  margin: auto;
  `

  const HeaderImg = styled.img.attrs({
    src: Logo
  })`
  height: 4rem;
  cursor: pointer;
  `

  const StyledASection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  `

  const StyledA = styled.a`
  margin-right: 3%;
  `

  return (
    <StyledSection>
      <StyledA>
        <HeaderImg onClick={homeClick} />
      </StyledA>
      <StyledASection>
        <StyledA>support@weknowit.se</StyledA>
        <StyledA>010 - 151 08 99</StyledA>
        <StyledA>Vår personuppgiftspolicy</StyledA>
      </StyledASection>
      <div>
        <ButtonContainer buttonFunction={facebookClick} buttonText={<i className="fab fa-facebook-f"></i>} />
        <ButtonContainer buttonFunction={instagramClick} buttonText={<i className="fab fa-instagram"></i>} />
        <ButtonContainer buttonFunction={linkedinClick} buttonText={<i className="fab fa-linkedin"></i>} />
      </div>
    </StyledSection>
  );
}

export default withRouter(Footer);