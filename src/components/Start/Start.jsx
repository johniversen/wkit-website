import React from 'react';
import BannerContainer from '../Banner';
import HeaderContainer from '../Header';
import ProductsContainer from '../Products';
import WebsitesContainer from '../Websites';
import AppsContainer from '../Apps';
import DevelopmentContainer from '../Development';
import StaffContainer from '../Staff';
import Staff from '../Staff/Staff';

const Start = () => {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <ProductsContainer />
      <WebsitesContainer />
      <AppsContainer />
      <DevelopmentContainer />
      <StaffContainer />
    </>
  )
}

export default Start;