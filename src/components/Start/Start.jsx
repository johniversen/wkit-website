import React from 'react';
import BannerContainer from '../Banner';
import HeaderContainer from '../Header';
import ProductsContainer from '../Products';
import TrustContainer from '../Trust';
import ContactContainer from '../Contact';
import FooterContainer from '../Footer';

const Start = () => {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <ProductsContainer />
      <TrustContainer />
      <ContactContainer />
      <FooterContainer />
    </>
  )
}

export default Start;