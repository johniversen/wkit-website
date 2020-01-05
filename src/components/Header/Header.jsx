import React from "react";
import styled from 'styled-components';
import { withRouter } from "react-router";
import Logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();

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
    window.scrollTo(0, 0)
  }
  
  const aboutClick = () => {
    props.history.push("/about")
    window.scrollTo(0, 0)
  }

  const StyledSticky = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 102;
  `

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  min-height: 5rem;
  width: 90%;
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
    <StyledSticky>
      <StyledSection>
        <StyledA>
          <HeaderImg onClick={homeClick} />
        </StyledA>
        <div className={classes.root}>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button onClick={aboutClick}>OM OSS</Button>
            <Button href="#contact">KONTAKT</Button>
          </ButtonGroup>
        </div>
        <div className={classes.root}>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button onClick={facebookClick}><i className="fab fa-facebook-f"></i></Button>
            <Button onclick={instagramClick}><i className="fab fa-instagram"></i></Button>
            <Button onClick={linkedinClick}><i className="fab fa-linkedin"></i></Button>
          </ButtonGroup>
        </div>
      </StyledSection>
    </StyledSticky>
  );
}

export default withRouter(Header);