import React from 'react';
import Banner from './Banner';
import ButtonContainer from '../Buttons';
import { withRouter } from 'react-router';

const BannerContainer = (props) => {
  const testClick = () => {
    props.history.push("/about");
  }
  return (
    <>
    <Banner />
    <ButtonContainer buttonFunction={testClick} buttonText={"Test"} />
    </>
  )
}

export default withRouter(BannerContainer);