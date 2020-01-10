import React from 'react';
import BannerContainer from '../Banner';
import HeaderContainer from '../Header';
import ProductsContainer from '../Products';
import TrustContainer from '../Trust';
import ContactClientContainer from '../ContactClient';
import FooterContainer from '../Footer';

// För att få react-router att fungera på det sätt jag avsett behövs en sådan här komponen. Man kan se på denna komponent som startsida. De andra sidorna är personuppgiftspolicy och om oss.

const Start = () => {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <ProductsContainer />
      <TrustContainer />
      <ContactClientContainer />
      <FooterContainer />
    </>
  )
}

export default Start;