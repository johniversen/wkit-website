import React from "react";
import styled from 'styled-components';
import ButtonContainer from '../Buttons';
import { withRouter } from "react-router";
import Logo from '../../assets/logo.png';

const Header = (props) => {
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
  width: 80%;
  margin: auto;
  `

const HeaderImg = styled.img.attrs({
  src: Logo
})`
height: 4rem;
cursor: pointer;
`

const StyledA = styled.a`
`

  return (
    <StyledSection>
      <StyledA>
        <HeaderImg onClick={homeClick} />
      </StyledA>
      <div>
        <ButtonContainer buttonFunction={aboutClick} buttonText={"OM OSS"} />
        <ButtonContainer buttonText={"KONTAKT"} />
      </div>
      <div>
        <ButtonContainer buttonFunction={facebookClick} buttonText={<i className="fab fa-facebook-f"></i>} />
        <ButtonContainer buttonFunction={instagramClick} buttonText={<i className="fab fa-instagram"></i>} />
        <ButtonContainer buttonFunction={linkedinClick} buttonText={<i className="fab fa-linkedin"></i>} />
      </div>
    </StyledSection>
  );
}

export default withRouter(Header);