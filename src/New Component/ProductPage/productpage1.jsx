import React from 'react';
import HeaderNotLoggedIn from '../HeaderNotLoggedIn';
import PD1 from '../ProductPage/product1';
import Footer from '../NewFooter';
import {Flex
  } from '@chakra-ui/react'

const productpage1 = () => {
  // fontFamily={'Kanit, sans-serif'}
  return (
    <div>
        <HeaderNotLoggedIn/>
        <PD1/>
        <Footer/>
    </div>

  );
};

export default productpage1;