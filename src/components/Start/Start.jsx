import React from 'react';
import BannerContainer from '../Banner';
import HeaderContainer from '../Header';
import ProductsContainer from '../Products';
import TrustContainer from '../Trust';
import ContactContainer from '../Contact';

const Start = () => {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <ProductsContainer />
      <TrustContainer />
      <ContactContainer />
    </>
  )
}

export default Start;