import React from 'react';
import {Box, Image, Flex} from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import informationicon from './picpayment/profile.png';
import logoshop from './picpayment/logo.png';
import service from './picpayment/delivery3.png';
import creditcard from './picpayment/creditcard.png';


const payment = () => { // Change function name to start with an uppercase letter
  return (
    <Box w='1260px' h='1300px' position="relative" right="-320px" bottom="-20px" fontFamily={'Kanit, sans-serif'}>
        <Flex position="relative" right="-40px">
            <Box w='770px' h='1200px' border="1px solid #000">
              <Flex>
                <Box w='100px' h='100px' bg="gray"></Box>
                <Box w='100px' h='100px' bg="black"></Box>
                <Box w='100px' h='100px' bg="gray"></Box>
                <Box w='100px' h='100px' bg="black"></Box>
                <Box w='100px' h='100px' bg="gray"></Box>
                <Box w='100px' h='100px' bg="black"></Box>
              </Flex>
              
              <Box w='450px' h='100px' bg="black" position="relative" right="-160px"></Box>
              {/* <Image src={logoshop} alt="Image 1" width="120px" height="80px"/> */}
            </Box>
            <Box w='390px' h='1200px' position="relative" right="-20px" border="1px solid #000">

            </Box>
        </Flex>
    </Box>
  );
};

export default payment;
