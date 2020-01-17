import React, { useState } from "react";
import styled from 'styled-components';
import { withRouter } from "react-router";
import Logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../variables/colors';

// Detta är headern.

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
  const c = { ...COLORS };
  const [toggledBurgerMenu, setCurrentMenu] = useState('default');

  const facebookClick = () => {
    window.location.href = "https://www.facebook.com/WeKnowITswe/";
    console.log("fb");
  }

  const instagramClick = () => {
    window.location.href = "https://www.instagram.com/weknowitswe/";
    console.log("insta");
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

  const careerClick = () => {
    props.history.push("/career")
    window.scrollTo(0, 0)
  }

  const toggleBurgerMenu = () => {
    toggledBurgerMenu === 'default' ? setCurrentMenu('burgerMenu'): setCurrentMenu('default');
  }

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 425px) {
    display: none;
  }
  `

  const StyledMobileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 426px) {
    display: none;
  }
  `

  const Burger = styled.div`
  font-size: 2.5rem;
  color: ${c.wkitBlue};
  `

  const BurgerMenu = styled.div`
  background-color: white;
  min-height: 5rem;
  `
  
  const HeaderImg = styled.img.attrs({
    src: Logo
  })`
  height: 4rem;
  cursor: pointer;

  @media (max-width: 425px) {
    height: 3rem;
  }
  `

  const StyledA = styled.a`
  `

  return (
      <>
      <StyledSection>
        <StyledA>
          <HeaderImg onClick={homeClick} />
        </StyledA>
        <div className={classes.root}>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button onClick={aboutClick}>OM OSS</Button>
            <Button href="#contact">KONTAKT</Button>
            <Button onClick={careerClick}>KARRIÄR</Button>
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
      <StyledMobileSection>
        <StyledA>
          <HeaderImg onClick={homeClick} />
        </StyledA>
        <Burger onClick={toggleBurgerMenu}>
          <i class="fas fa-bars"></i>
        </Burger>
      </StyledMobileSection>
      {toggledBurgerMenu === 'burgerMenu' && <BurgerMenu>
      <div className={classes.root}>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button onClick={aboutClick}>OM OSS</Button>
            <Button href="#contact">KONTAKT</Button>
            <Button onClick={careerClick}>KARRIÄR</Button>
          </ButtonGroup>
        </div>
        <div className={classes.root}>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button onClick={facebookClick}><i className="fab fa-facebook-f"></i></Button>
            <Button onclick={instagramClick}><i className="fab fa-instagram"></i></Button>
            <Button onClick={linkedinClick}><i className="fab fa-linkedin"></i></Button>
          </ButtonGroup>
        </div>
      </BurgerMenu>}
      </>
  );
}

export default withRouter(Header);