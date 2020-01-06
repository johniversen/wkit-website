import React from "react";
import styled from 'styled-components';
import { withRouter } from "react-router";
import Logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../variables/colors';

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

const Footer = (props) => {
  const classes = useStyles();
  const c = { ...COLORS };

  const policyClick = () => {
    props.history.push("/policy")
    window.scrollTo(0, 0)
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

  @media (max-width: 425px) {
    height: 3rem;
  }
  `

  const StyledASection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  `

  const StyledA = styled.a`
  margin-right: 3%;
  color: ${c.wkitBlue};
  cursor: pointer;
  text-decoration: none;
  `

  return (
    <StyledSection>
      <StyledA>
        <HeaderImg />
      </StyledA>
      <StyledASection>
        <StyledA href="mailto:support@weknowit.se">support@weknowit.se</StyledA>
        <StyledA href="tel:010-1510899">010-1510899</StyledA>
        <StyledA onClick={policyClick}>Vår personuppgiftspolicy</StyledA>
      </StyledASection>
      <div className={classes.root}>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button onClick={facebookClick}><i className="fab fa-facebook-f"></i></Button>
            <Button onclick={instagramClick}><i className="fab fa-instagram"></i></Button>
            <Button onClick={linkedinClick}><i className="fab fa-linkedin"></i></Button>
          </ButtonGroup>
        </div>
    </StyledSection>
  );
}

export default withRouter(Footer);