import React from 'react';
import HeaderLoggedIn from '../HeaderLoggedIn';
import PD1 from '../ProductPage/product1';
import Footer from '../NewFooter';
import {Flex
  } from '@chakra-ui/react'

const productpage1 = () => {
  // fontFamily={'Kanit, sans-serif'}
  return (
    <div>
        <HeaderLoggedIn/>
        <PD1/>
        <Footer/>
    </div>

  );
};

export default productpage1;